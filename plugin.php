<?php

/**
 * Plugin Name: GutenTweaks
 * Plugin URI:  https://github.com/log1x/gutentweaks
 * Description: A plugin containing a few Gutenberg tweaks.
 * Version:     1.0.6
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
        require_once file_exists($composer = __DIR__ . '/vendor/autoload.php') ?
            $composer :
            __DIR__ . '/dist/autoload.php';

        return new GutenTweaks(
            plugin_dir_path(__FILE__),
            plugin_dir_url(__FILE__)
        );
    }
});
