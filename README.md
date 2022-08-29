required global tools:
- csso-cli

## Font installation/update

1. Generate an icon font using [IcoMoon](https://icomoon.io/app/#/select)
2. Copy the font files (svg, woff, ttf) into `/fonts-production/fonts`. Copy the contents of the generated CSS file into `/fonts-production/icons.css`
3. Adjust the icon class names in the CSS file if necessary
4. Manually copy the `fonts.css` file into `_site/css` and the `/fonts-production/fonts` folder to `_site/fonts` (TODO: automate this step)