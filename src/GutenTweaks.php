<?php

namespace Log1x\GutenTweaks;

use MatthiasMullie\Minify;

class GutenTweaks
{
    /**
     * Initialize the plugin.
     */
    public function __construct(protected string $path, protected string $uri)
    {
        //
    }

    /**
     * Create a new instance of the plugin.
     */
    public static function make(string $path, string $uri): self
    {
        return new static($path, $uri);
    }

    /**
     * Boot the plugin.
     */
    public function boot(): void
    {
        $this->registerEditorSettings();

        $this->inlineBlockStyles();
        $this->enqueueBlockAssets();
    }

    /**
     * Register default block editor settings.
     */
    public function registerEditorSettings(): void
    {
        add_filter('block_editor_settings_all', function ($config) {
            return array_merge($config, [
                'autosaveInterval' => WEEK_IN_SECONDS,
            ]);
        });
    }

    /**
     * Inline the frontend editor styles.
     */
    public function inlineBlockStyles(): void
    {
        add_filter('wp_head', function () {
            if (! $this->asset('css/app.css')) {
                return;
            }

            $styles = sprintf(
                '<style>%s</style>',
                (new Minify\CSS($this->path . 'public/css/app.css'))->minify()
            );

            $styles = str_replace('@charset "UTF-8";', '', $styles);

            echo $styles;
        });
    }

    /**
     * Enqueue the block editor assets.
     */
    public function enqueueBlockAssets(): void
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
     */
    public function asset(string $asset = '', string $manifest = 'public/mix-manifest.json'): string
    {
        if (! file_exists($manifest = $this->path . $manifest)) {
            return $this->uri . 'public/' . $asset;
        }

        $manifest = json_decode(file_get_contents($manifest), true);

        return $this->uri . 'public/' . ($manifest[$asset] ?? $asset);
    }

    /**
     * Determine if a given string contains a given substring.
     */
    public function contains(string $haystack, string|array $needles): bool
    {
        foreach ((array) $needles as $needle) {
            if ($needle !== '' && mb_strpos($haystack, $needle) !== false) {
                return true;
            }
        }

        return false;
    }
}
