setup basic sections and functionality from slayed theme





picture snippet - document conditional below
utility classes
code formatting standards (sass, etc)
Test sectional vs one stylesheet
come up with wireframed modules 
github workflows


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