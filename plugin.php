<?php

/**
 * Plugin Name: GutenTweaks
 * Plugin URI:  https://github.com/log1x/gutentweaks
 * Description: A plugin containing a few Gutenberg tweaks.
 * Version:     1.1.5
 * Author:      Brandon Nifong
 * Author URI:  https://github.com/log1x
 * Licence:     MIT
 */

namespace Log1x\GutenTweaks;

add_action('plugins_loaded', new class
{
    /**
     * Invoke the plugin.
     *
     * @return void
     */
    public function __invoke()
    {
        if (file_exists($composer = __DIR__.'/vendor/autoload.php')) {
            require_once $composer;
        }

        GutenTweaks::make(
            path: plugin_dir_path(__FILE__),
            uri: plugin_dir_url(__FILE__)
        )->boot();
    }
});
