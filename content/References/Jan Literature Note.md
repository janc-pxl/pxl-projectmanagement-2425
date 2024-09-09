---
share: true
category: References
title: "{{title}}"
citekey: "{{citekey}}"
type: literaturenote
tags: 
summary: "{{markdownNotes}}"
year: '{{date | format ("YYYY")}}'
url: "{{url}}"
authors: "{%- for creator in creators -%}{%- if creator.name %} {{creator.name}}{%- else %} {{creator.lastName}}, {{creator.firstName}}{%- endif %}{% endfor %}"
---
  
> [!Cite]   
> {{bibliography}}  
  
  
---  
  
# Metadata  
  
>[!Properties]  
{% for type, creators in creators | groupby("creatorType") -%}  
{%- for creator in creators -%}  
> **{{"First" if loop.first}}{{type | capitalize}}**  
{%- if creator.name %} {{creator.name}}    
{%- else %} {{creator.lastName}}, {{creator.firstName}}    
{%- endif %}    
{% endfor %}~   
{%- endfor %}      
> **Title** {{title}}    
> **Year** {{date | format("YYYY")}}     
> **Citekey** {{citekey}} {%- if itemType %}    
> **itemType** {{itemType}}{%- endif %}{%- if itemType == "journalArticle" %}    
> **Journal** *{{publicationTitle}}* {%- endif %}{%- if volume %}    
> **Volume** {{volume}} {%- endif %}{%- if issue %}    
> **Issue** {{issue}} {%- endif %}{%- if itemType == "bookSection" %}    
> **Book** {{publicationTitle}} {%- endif %}{%- if publisher %}    
> **Publisher** {{publisher}} {%- endif %}{%- if place %}    
> **Location** {{place}} {%- endif %}{%- if pages %}     
> **Pages** {{pages}} {%- endif %}{%- if DOI %}    
> **DOI** {{DOI}} {%- endif %}{%- if ISBN %}    
> **ISBN** {{ISBN}} {%- endif %}      
  
> [!LINK]   
>  {{pdfZoteroLink}}  
  
> [!Abstract]  
> {%- if abstractNote %}  
> {{abstractNote}}  
> {%- endif -%}.  
>   
# Notes  
  
> {%- if markdownNotes %}  
>{{markdownNotes}}{%- endif -%}  
>  
  
  
# Annotations  
_annotations in the paper_  
{%- macro calloutHeader(type, color) -%}    
{%- if type == "highlight" -%}  
<mark style="background-color: {{color}}">Quote</mark>  
{%- endif -%}  
{%- if type == "note" -%}   
  
{%- endif -%}    
{%- endmacro -%}  
  
  
.  
### Highlights  
{# Display highlights #}  
{% for annotation in annotations -%}  
{%- if annotation.type == "highlight" -%}  
{{ calloutHeader(annotation.type, annotation.color) }}  
{%- if annotation.annotatedText -%}{{annotation.annotatedText}}([{{annotation.page}}](zotero://open-pdf/library/items/{{annotation.attachment.itemKey}}?page={{annotation.page}}&annotation={{annotation.id}})){% endif %}  
{% if annotation.comment %}{{annotation.comment}}{%- endif %}  
{% if not loop.last %}{% endif %}  
{%- endif -%}  
{% endfor %}  
  
### Notes  
{# Display notes #}  
{% for annotation in annotations -%}  
{%- if annotation.type == "note" -%}  
{{ calloutHeader(annotation.type, annotation.color) }}  
{%- if annotation.annotatedText -%}{{annotation.annotatedText}}([{{annotation.page}}](zotero://open-pdf/library/items/{{annotation.attachment.itemKey}}?page={{annotation.page}}&annotation={{annotation.id}})){% endif %}  
{% if annotation.comment %}{{annotation.comment}}{%- endif %}  
{% if not loop.last %}{% endif %}  
{%- endif -%}  
{% endfor %}  
  
### Images  
{# Display images #}  
{% for annotation in annotations -%}  
{%- if annotation.imageRelativePath -%}  
![[{{annotation.imageRelativePath}}|{{annotation.imageRelativePath}}]]  
{%- endif -%}  
{% endfor %}