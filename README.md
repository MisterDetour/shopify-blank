github is connected to sunflow test store: npm run dev -- --store sunflow-test-store

CURRENT: go through vite plugin documentation again (js in footer) - organize tasks below







css reset

setup basic templates (go through the docs in detail for each) - Review dawn theme templates as well:

https://shopify.dev/docs/sto  refronts/themes/architecture/templates

deal with javascript in main-product section

variant functionality
cart drawer
storefront filtering
Predictive search
product section should use blocks

pagination to collection templates
Product discounts

add section schemas

setup basic templates - https://www.youtube.com/watch?v=zCDo-l5DJSo
go back and clean up all current sections & snippets
setup basic sections and functionality from slayed theme
make sure js is deffered
review all documentation for vite plugin - figure out if assets folder is wiped clean
need cart empty logic on cart & drawer



figure out react setup with vite plugin
picture snippet - document conditional below
utility classes
code formatting standards (sass, etc)
Test sectional vs one stylesheet
come up with wireframed modules 
github workflows
add wai-aria markup


{%- if block.settings.img_mb != blank -%}
	{% render 'picture', image: block.settings.image, image_mb: block.settings.img_mb, load: 'eager', sizes = '(min-width: 1440px) 680px, 50vw' %} 
{%- else -%}
	{{
	block.settings.image 
	| image_url: width: 1361
	| image_tag: loading: 'eager', 
	sizes: '(min-width: 1440px) 680px, (min-width: 576px) 50vw, 100vw', 
	preload: true, 
	class: 'bg-img'
	}}
{%- endif -%}

Common Shopify elements
--------
password.liquid layout file
predective search component?
cart drawer & quick add
setup all templates