____
____

# S_CONSTRUCTORS
Those actions build diferent elements based in a layer parent.


## s_construct_text(content,parent,styles,verticalpadding,scroll); 

Construct a layer with scrollable text inside. 

* content: the text content 
* parent: the name of the layer that will alocate all the constructed text. there are some possibilityes:

    * [name of existing layer]: will have this layer as parent.
    * 's_popup': to have the parent of the s_popup action

* styles: (stylebg|stylescrollarea|style_content ) the 3 diferent styles needed to construct. "off" it means default.
* verticalpadding: the vertical separation (top and bottom) between text and parent layer.
* scroll: if empty it will evaluate the real height of the layer. Setting it to false, no scroll will apear.
variables created:
* s_construct_text_pixelheight: contains the pixel height of the text layer
* s_construct_text_main_name: contains the name of the main layer (which is the background)

config
```
The preconfigured styles in styles/styles.xml
```

Example (2 examples easy and adbanced):
```
<!-- The parent existing layer -->
<layer name="sdummy20" keep="true" type="container" width="300" height="400" align="bottomleft" bgcolor="0x9a5322" bgalpha="1" alpha="1" oy=""  ox="" />

<layer name="sdummy21" keep="true" type="container" width="300" height="400" align="bottomright" bgcolor="0x9a5322" bgalpha="1" alpha="1" oy=""  ox="" />

<!-- the action that will build the text -->
<action name="accio_s_constructor" autorun="onstart">

    s_construct_text(get(data[dunmmy_text].content),sdummy20,dummyc_bg|dummyc_scrollarea|dummyc_content,90);

    s_construct_text(get(data[dunmmy_text].content),sdummy21,,20);
		
</action>

<!-- the custom styles for sdummy20 -->
<style name="dummyc_bg"
                       keep="true"
                        type="container"
                        alpha="1"
                        width="100%"
                        height=""
                        align="center"
                        x="0"
                        y="0"
                        bgcolor="0xfaa3af"
                        bgalpha="1" 
                    />
                      
        <style name="dummyc_scrollarea"
            keep="true"
                url="%FIRSTXML%/plugins/scrollarea.js"
                align="top" 
                width="100%" 
                direction="v"
                draggable="true"
                parentmaskchildren="true"
                capturechildren="true"
                mwheel="true"
                onhover_autoscrolling="false"
                overscroll="1.0"
                friction="0.95"
                acceleration="0.08"
                returnacceleration="0.15"
                momentum="0.06"
                onscroll="trace('un altre estil')"
        />

        <style name="dummyc_content"
            keep="true"
            type="text"
            html=""
            css="font-family:Arial; font-size:16px; color:#35aa22; line-height:2;"
            width="100%"
            autoheight="auto"
            padding="0 30 30 30"
            wordwrap="true"
            vcenter="false"
            bg="false"
            bgcolor="0xFFFFFF"
            bgalpha="1.0"
            interactivecontent="true"
            handcursor="false"
            
        />

<!-- the data text -->

<data name="dunmmy_text">
<![CDATA[

<p>Militar perquè en les batalles. <a href="https://sergigomez.com" target="_blank">Muller sua la sua</a> breu partida la qual ho. De Santa Maria Egipcíaca E. Bé es tenia un fill de molta poca edat. Reciten les següents històries Comença la. Amazones; Titus Lívius dels romans: d'Escipió d'Anibal de. Davant tots dos servidors així hòmens com dones e. Vida d'aquells fos perpetual per glòria. De molta poca edat E havia fet fer un. E molt més de virtuts lo que per.</p>

<p>E esmena de sos desfalliments E aquest virtuós comte hi. Com lo comte Guillem de Varoic proposà d'anar. Admirables dels apòstols màrtirs e altres sants; la penitència de. Jo m'he a partir de. La vista dels enemics La dignitat militar deu ésser. Los actes frescs de nostres. És de l'honor que deu ésser feta al. Partir de vosaltres e la mia tornada m'és incerta si. Ésser molt agreujada Al matí lo. Per què ara de present vull satisfer. Servit per llong temps l'art de cavalleria ab. Anell d'or ab les armes sues e. Viure emperó no els ha tolt l'universal Creador lo.</p>

]]>

</data>

```
result:
```
It will construct two scrollable texts. 
Inside "sdummy20" with a top and bottom padding of 90, and with the custom styles, it will be the "dunmmy_text".
Inside "sdummy21" with a top and bottom padding of 20, and with the global predefined styles, it will be the "dunmmy_text".

```

</br>

___


## s_floating_text_constructor(textcontent,textname,layerstyle,layerparent,layeralign,layeredge,layerox,layeroy); 

Construct a text layer tag style. 


* textcontent: the text itself
* textname:the phisical name of the layer
* layerstyle: the style, if not setted, the default and configurable s_floating_text_constructor
* layerparent:the name of parent. if not setted, no parent
* layeralign:the align of the text layer. if not setted:style align
* layeredge:the edge of the text layer. If not setted:style edge.
* layerox:the x offset
* layeroy:the y offset

object cretated:

* layer[ textname + 's_ft']

config
```
The preconfigured styles in styles/styles.xml
```

Example:
```
<action autorun="onstart">	
		
	s_floating_text_constructor('Això és un text',text1,min_max_value,,center,,40,100);
    s_floating_text_constructor('Això és un text default',text2);

</action>

```
result:
```
1.- It will construct a text layer with the text 'Això és un text'. the layer will have the internal name of text1. Will have the style 'min_max_value', with no parent, will be aligned to center, with the edge of the style (min_max_value), and will have an x offset of 40 and an y offset of 100.
2.- It will construct a text layer with the text 'Això és un text default', and with the internal name of text2. All the other parameters are preconfigured in the default style ' s_floating_text_constructor ' in styles/styles.xml

```

</br>

___

