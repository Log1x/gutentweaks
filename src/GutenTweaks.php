<?php

namespace Log1x\GutenTweaks;

use MatthiasMullie\Minify;

class GutenTweaks
{
    /**
     * The plugin directory path.
     *
     * @var string
     */
    protected $path;

    /**
     * The plugin directory URI.
     *
     * @var string
     */
    protected $uri;

    /**
     * Initialize the plugin.
     *
     * @param  string $path
     * @param  string $uri
     * @return void
     */
    public function __construct($path, $uri)
    {
        $this->path = $path;
        $this->uri = $uri;

        $this->registerEditorSettings();

        $this->inlineBlockStyles();
        $this->enqueueBlockAssets();
    }

    /**
     * Register default block editor settings.
     *
     * @param  array $config
     * @return array
     */
    public function registerEditorSettings()
    {
        add_filter('block_editor_settings_all', function ($config) {
            return array_merge($config, [
                'autosaveInterval' => WEEK_IN_SECONDS,
            ]);
        });
    }

    /**
     * Inline the frontend editor styles.
     *
     * @return void
     */
    public function inlineBlockStyles()
    {
        add_filter('wp_head', function () {
            if (! $this->asset('css/app.css')) {
                return;
            }

            echo sprintf(
                '<style>%s</style>',
                (new Minify\CSS($this->path . 'public/css/app.css'))->minify()
            );
        });
    }

    /**
     * Enqueue the block editor assets.
     *
     * @return void
     */
    public function enqueueBlockAssets()
    {
        add_filter('enqueue_block_editor_assets', function () {
            if ($manifest = include($this->path . 'public/js/editor.asset.php')) {
                wp_enqueue_script(
                    'blocks/editor.js',
                    $this->asset('js/editor.js'),
                    ...array_values($manifest)
                );
            }

            wp_enqueue_style('blocks/editor.css', $this->asset('css/editor.css'), false, null);
        });
    }

    /**
     * Resolve the URI for an asset using the manifest.
     *
     * @return string
     */
    public function asset($asset = '', $manifest = 'public/mix-manifest.json')
    {
        if (! file_exists($manifest = $this->path . $manifest)) {
            return $this->uri . 'public/' . $asset;
        }

        $manifest = json_decode(file_get_contents($manifest), true);

        return $this->uri . 'public/' . ($manifest[$asset] ?? $asset);
    }

    /**
     * Determine if a given string contains a given substring.
     *
     * @param  string  $haystack
     * @param  string|string[]  $needles
     * @return bool
     */
    public function contains($haystack, $needles)
    {
        foreach ((array) $needles as $needle) {
            if ($needle !== '' && mb_strpos($haystack, $needle) !== false) {
                return true;
            }
        }

        return false;
    }
}
