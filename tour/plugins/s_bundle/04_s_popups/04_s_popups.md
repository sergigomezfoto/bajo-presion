____
____
# S_UI_EFFECTS
Those actions launch external (or data) information.
set(layer[sdummy9].onclick,s_popup_iframe('https://noupunt.com',600,300,get(sdummystyles.styles),get(sdummyactions.actions)));
____
</br>

##  s_popup_iframe(url,width,height,styles,actions);

It launch a popup with the url as main data. It have a general information, and you can change all dinamically. That way, after a general config, you have the simpliest way to call the action: s_popup_iframe('https ://url.com'); or you can custom all the parameters.


* url: the url taht you eant to show as a popup
* width: the width of the popup (the maximum with will be allways the 80% of the stage width)
* height: the height of the popup (the maximum with will be allways the 80% of the stage height)
* styles: there are 3 styles that you can costumize, you must write the style names separated by "|". If you want to keep one of the styles as preconfigured yo must write "off".
    * background layer : the layer that will be overlayed to the sphere
    * main layer: the canvas layer that contains the url.
    * x close image layer: the layer used as close button.   
* actions:There are 3 actions that are launched in thes action. before popup opens, when the popup opens, after close the popup. Yo must write the name of the actions separated by "|". I you want to keeep one of the actions as preconfigured, you must write "off".
    * before action: It's launched before the popup ( you can use it to blur the background )
    * middle ation: It's launched when the main layer it will render( you can use it to ad another layer as shadow )
    * after action:It's launched when you pres the close button (you can use it to unblur the background)

variables:

* s_popup_open: boolean
* s_popup_caller: last caller of a popup.
config:

First of all you may want to confgure the general styles and action that will be used in all popups and imporrt the css styles in index.htm. Those styles are in the folder config/css_must_be_in_index/styles.css and are used mainly to format the placeholders before the url content is loaded.

config.xml
```
    <!-- GENERAL OBJECT STYLE CONFIGURATOR -->
    <s_popup_general_settings  
    width="750" 
    height="600" 

    bgcolor="0x3b3b3b"
    bgalpha="0.7"
    bgalphatweentime="0.5"

    mainbgcolor="0x4e4e4e"
    mainbgroundedge=""
    mainbgborder="12 0xffffff 1"

    xcloseurl="%FIRSTXML%/skin/img/closex.png"
    xclosecrop="0|0|54|54"
    xcloseonovercrop="54|0|54|54"
    xcloseonoutcrop="0|0|54|54"
    xcloseonover=""
    xcloseonout=""
    xclosealign="righttop"
    xcloseedge="lefttop"
    xclosex="-12px"
    xclosey="-12px"
    xclosescale="1"
    />


    <!--GENERAL POPUP ACTIONS -->
    
    <!-- dependency of before opens action -->
    <plugin name="s_pp_blur" 
        keep="true" 
        url="%FIRSTXML%/plugins/pp_blur.js" 
        enabled="true" range="0.0" 
        linearrgb="false" 
        order="1" 
        phase="2" 
    />


    <!-- BEFORE POPUP OPENS ACTION -->
	<action name="s_popup_before_open">
		trace('default open popup');
		tween(plugin[s_pp_blur].range, 40.0);
	    tween(layer[root].alpha,0,0.3);		
	</action>
    
    <!-- MIDDLE ACTIONS (WHEN IS OPPENED)  -->
	<action name="s_popup_middle_action">
		trace('default middle popup');
		// add layer to iframe for example!		
	</action>
    <!-- AFTER AFTER POPUP CLOSE ACTIONS -->
	<action name="s_popup_after_close">
		trace('default close popup');
		tween(plugin[s_pp_blur].range, 0.0);
		tween(layer[root].alpha,1,1);
	</action>

    <!--  YOU HAVE ALSO AN ADBANCED CONFIGURATION -->
```
config/css_must_be_in_index/styles.css
```
    /*////////////*/
    /*S_IFRAME*/
    /*////////////*/

    /*
    .s_popup_container
                    |
                    .container_placeholder_s_iframe
                    |                              |
                    |                              .spinner_s_iframe
                    |                                             |
                    |                                             .dot1_s_iframe
                    |                                             .dot2_s_iframe
                    |
                    .s_iframe
    */



    /*DIV S_POPUP_CONTAINER*/

    .s_popup_container {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        -moz-user-select: text;
        -webkit-user-select: text;
        -ms-user-select: text;
        user-select: text;
    }

    /*PLACEHOLDER S_IFRAME*/
    .container_placeholder_s_iframe {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        align-content: center;
        flex-wrap: wrap;
        height: 100%;
    }

    .spinner_s_iframe {
        width: 40px;
        height: 40px;
        -webkit-animation: sk-rotate 2.0s infinite linear;
        animation: sk-rotate 2.0s infinite linear;
    }

    .dot1_s_iframe,
    .dot2_s_iframe {
        width: 60%;
        height: 60%;
        display: inline-block;
        position: absolute;
        top: 0;
        background-color: #41ffc7;
        border-radius: 100%;

        -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
        animation: sk-bounce 2.0s infinite ease-in-out;
    }

    .dot2_s_iframe {
        top: auto;
        bottom: 0;
        -webkit-animation-delay: -1.0s;
        animation-delay: -1.0s;
    }

    @-webkit-keyframes sk-rotate {
        100% {
            -webkit-transform: rotate(360deg)
        }
    }

    @keyframes sk-rotate {
        100% {
            transform: rotate(360deg);
            -webkit-transform: rotate(360deg)
        }
    }

    @-webkit-keyframes sk-bounce {

        0%,
        100% {
            -webkit-transform: scale(0.0)
        }

        50% {
            -webkit-transform: scale(1.0)
        }
    }

    @keyframes sk-bounce {

        0%,
        100% {
            transform: scale(0.0);
            -webkit-transform: scale(0.0);
        }

        50% {
            transform: scale(1.0);
            -webkit-transform: scale(1.0);
        }
    }

    /*S_IFRAME*/
    .s_iframe {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0px;
        opacity: 0;
        transition: opacity 1s ease-out;
        left: 0px;
        /*  border-radius: 40px;*/
    }


usage: (simplest way)

    <!-- THE LAYER THAT WILL TRIGGER DE IFRAME -->
    <layer name="sdummy1" html="1 predefinida" keep="true" type="text" width="100" height="100" align="center" bgcolor="0x999922"  alpha="1" oy="-200"  ox="-200" onclick="trace(dummy1)" />

    <!-- THE ACTION THAT SET THE ONCLICK ACTION TO THE DUMMY LAYER -->
    <action name="fes_popup" autorun="onstart">
        set(layer[sdummy1].onclick,s_popup_iframe('https://sergigomez.com'));
    </action>
```	
result:
```
    When clicking to the "sdummy1" layer, it will trigger a popup with the url sergigomez.com and the popup will be displayed acording the general config.
```
usage: (all costum)
```
    <!-- THE LAYER THAT WILL TRIGGER DE IFRAME -->
    <layer name="sdummy9" html="9 custom tot"  keep="true" type="text" width="100" height="100" align="center" bgcolor="0x3f52f5" alpha="1"  oy="200" ox="200"  onclick="trace(dummy9)"/>

    <!-- THE ACTION THAT SET THE ONCLICK ACTION TO THE DUMMY LAYER -->
    <action name="fes_popup" autorun="onstart">
        set(layer[sdummy9].onclick,s_popup_iframe('https://sergigomez.com',600,300,get(sdummystyles.styles),get(sdummyactions.actions)));
    </action>

    <!-- THE CUSTOM CONFIG -->

    
    //style object
    <sdummystyles 
        styles="dummy_popup_bg|dummy_popup_main|dummy_popup_close_x" 
    />

    <!-- styles -->

    //background
    <style name="dummy_popup_bg"
        type="container"
        align="lefttop" 
        width="100%" 
        height="100%"
        zorder="99"
        handcursor="false"
        bgcapture="true"
        capture="true"
        enabled="true"
        onloaded="tween(bgalpha,0.95,1.0);" 
        bgcolor="0xff66aa"
    />

    //main						  
    <style name="dummy_popup_main"
        type="container"
        align="center"
        bgalpha="1"
        bgcapture="true"
        maskchildren="false"
        capture="true"
        handcursor="false"
        alpha="0"
        bgcolor="0x4488ff"
        bgborder=""
        bgroundedge=""
    />

    //close x (you must put a correct url for the image otherways it will not happens notheing)
    <style name="dummy_popup_close_x"
        type="image"
        url="%FIRSTXML%/skin/img/closexdummy2.png"
        crop=""
        onovercrop=""
        onoutcrop=""
        align="lefttop"
        edge="center"
        x="-12px"
        y="-12px"
        scale="1"
        zorder="99"
        alpha="1"	
        onover="tween(rotate,180);"	
        onout="tween(rotate,0);"			    
        onloaded.addevent="scope(private:SPOPUPCORE,delayedcall(0.3,tween(global.layer[s_popup_main].alpha, 1)));"
    />

    //custom actions object
    <sdummyactions 
        actions="dummy_before|dummy_midle|dummy_after" 
    />

    //dependencies

    <plugin name="dummy_pp_light" devices="html5" keep="true"
        url="%FIRSTXML%/plugins/pp_light.js" 
        enabled="true"
        exposure="0.0"
        lights="0.0"
        shadows="0.0"
        filterrange="60.0"
        masking="1.0"
        quality="7"
        order=""
        phase="2"
    />


    <style name="s_down_main"
        type="container"
        parent="s_popup_main"
        align="bottom"
        bgalpha="1"
        width="80%"
        height="6"
        y="-18"
        bgcapture="true"
        maskchildren="false"
        capture="true"
        handcursor="false"
        alpha="1"
        bgcolor="0x41ffc7"
    />			

    //end of dependencies

    <!-- actions -->
    <action name="dummy_before">
        trace('custom open popup');	
        tween(plugin[dummy_pp_light].exposure,3);
    </action>

    <action name="dummy_midle">
        trace('custom midle popup');	
        addlayer('s_down_main', s_down_main);
        s_down_main.loadstyle('s_down_main');
    </action>

    <action name="dummy_after">
        tween(plugin[dummy_pp_light].exposure,0);
        trace('custom after popup');	
    </action>
```
result:
```
    When clicking to the "sdummy9" layer, it will trigger a popup with the url sergigomez.com and the popup be 600px width and 300px, This popup will be displayed acording the custom styles and actions defined in the action.
```
_______
</br>

##  s_popup_layers(constructor_action,width,height,styles,actions);

Basically the same exact than s_popup_iframe(url), but in this case will not launch a url but a constructor action that is dessigned to have the content inside krpano structure.

* constructor_action: create an action that build some content in a krpano layer.
* ...rest of args...: the same than s_popup_iframe();


variables:

* s_popup_open: boolean

!! the main layer witch can be the parent for the constructor action is called: 's_popup_main' 

example using normal action:
```
    <!-- THE LAYER THAT WILL TRIGGER DE IFRAME -->
    <layer name="sdummy11" html="11" keep="true" type="text" width="100" height="100" align="center" bgcolor="0x999922"  alpha="1" oy=""  ox="" onclick="trace(dummy11)" />

    <!-- THE ACTION THAT SET THE ONCLICK ACTION TO THE DUMMY LAYER -->
    <action name="fes_popup" autorun="onstart">
        set(layer[sdummy11].onclick,s_popup_layers(test_create_s_popup_layers();,300,600));
    </action>

    <!-- THE CONSTRUCTOR ACTION AND STYLES OF THE ACTION -->

    <action name="test_create_s_popup_layers">
        addlayer('test_bgcontent'); 
        set(layer[test_bgcontent].parent,s_popup_main );
        layer[test_bgcontent].loadstyle('test_s_popup_layers_bgcontent');
        addlayer('test_bgcontent-inside'); 
        layer[test_bgcontent-inside].loadstyle('test_s_popup_layers_bgcontent-inside');  
    </action>

        <style name="test_s_popup_layers_bgcontent"
        type="text"
        html="Layer wrapp"
        alpha="1"
        width="100%"
        height="100%"
        align="center"
        x="0"
        y="0"
        bgcolor="0xfff555"
        bgalpha="1" 
        />
                <style name="test_s_popup_layers_bgcontent-inside"  
                parent="test_bgcontent"
                type="text" 
                html="layer inside"              
                alpha="1"
                width="90%"
                height="90%"
                align="center"
                x="0"
                y="0"
                bgcolor="0xff7fff"
                bgalpha="1" 
                />
```
result:
```
    A popup with the size of 300x600 that will contain a yellow layer. This yellow layer will contain a pink layer.
```
example using s_constructor_text action:
```
    <!-- THE LAYER THAT WILL TRIGGER DE IFRAME -->
    <layer name="sdummy12" html="12" keep="true" type="text" width="100" height="100" align="center" bgcolor="0x999922"  alpha="1" oy=""  ox="" onclick="trace(dummy12)" />

    <!-- THE ACTION THAT SET THE ONCLICK ACTION TO THE DUMMY LAYER -->
    <action name="fes_popup" autorun="onstart">
        set(layer[sdummy12].onclick,s_popup_layers(s_construct_text(get(data[dunmmy_text].content))));
    </action>
    
    <!-- THE DATA  -->
    <data name="dunmmy_text">
    <![CDATA[

    <p>Militar perquè en les batalles. <a href="https://sergigomez.com" target="_blank">Muller sua la sua</a> breu partida la qual ho. De Santa Maria Egipcíaca E. Bé es tenia un fill de molta poca edat. Reciten les següents històries Comença la. Amazones; Titus Lívius dels romans: d'Escipió d'Anibal de. Davant tots dos servidors així hòmens com dones e. Vida d'aquells fos perpetual per glòria. De molta poca edat E havia fet fer un. E molt més de virtuts lo que per.</p>

    <p>E esmena de sos desfalliments E aquest virtuós comte hi. Com lo comte Guillem de Varoic proposà d'anar. Admirables dels apòstols màrtirs e altres sants; la penitència de. Jo m'he a partir de. La vista dels enemics La dignitat militar deu ésser. Los actes frescs de nostres. És de l'honor que deu ésser feta al. Partir de vosaltres e la mia tornada m'és incerta si. Ésser molt agreujada Al matí lo. Per què ara de present vull satisfer. Servit per llong temps l'art de cavalleria ab. Anell d'or ab les armes sues e. Viure emperó no els ha tolt l'universal Creador lo.</p>

    <p>Compendre e retenir aquelles Antigament l'orde. Los pocs han obtesa victòria dels molts la. Sos servidors donà molt més que no devia que. Glòria e de fama e contínua bona memòria los. Enemics E per ço foren per los antics ordenades justes. Fa especial commemoració lo present llibre. Cavallers animosos volgueren morir en les batalles. Morir en les batalles ans que. Que si aquell és ben. Reverit si los cavallers observaven aquelll. Los seus benaventurats darrers dies En tan alt greu excel·leix. Mostraven totes les armes E complit tot lo dessús. Solament los actes per longitud de temps. Que per la sua gran saviesa e. Es porien sostenir en pau segons que diu. Armes e d'anar de peregrinació.</p>

    ]]>

    </data>
```
result:
```
    A popup that will contain the "dummy_text" data. If the size of the text is bigger than the popup, it will be scrollable. (to get more control (css, styles, ect...), view the s_constructor actions).
```
</br>
_______

##  s_popup_fs(url,styles,actions);

It works exactly like "s_popup_iframe()" but don't have sizes because it's allways fullframe. Is designed to integrate an external tour. This full frame popup has his own configuration of predefined actions and styles (so it's not linked with the layers and iframe actions). And the external url can have his own button to close the popup remotely, so the two pages will comunicate using a word that we will call "joker word"

variables:

* s_popup_open: boolean

configuration: (the same than s_popup_iframe() in his config.xml and those other steps...)

```
<!-- IN THE MAIN PARENT TOUR -->


//[1] in config.xml :

<action name="s_popup_fs_comunicator" type="Javascript" autorun="preinit">
<![CDATA[
    window.onmessage = function(ifrmaediu) {
      //change the joker word 'tanca'
        if (ifrmaediu.data == 'tanca') {
          //chage the action after whe popup closes. it you want that the predefined action s_popup_after_close_fs(); trigger leave it like this. if you want a custo action, then you mut write like this: popup_close_fs(custom_action());
            krpano.call("popup_close_fs(off)");
        }
    };
]]>  
</action>

//[2] in poped up tour inside xml file:

<!-- the fisical close button wherever inside the tour -->
<layer name="close" keep="true" type="text" html="TANCA EL POPUP" css="color:#ffffff; text-align:center; font-size:26px;" align="center" vcenter="true" width="200" height="200" bgcolor="0x336677" bgalpha="1" 
onclick="s_close_popup_as_pano('tanca');"
/>
<!-- the action that will pass the joker word 'tanca' on click  -->
<action name="s_close_popup_as_pano" type="javascript">
    <![CDATA[
    window.top.postMessage(args[1], '*');
    ]]>
</action>

<!-- the joker word, 'tanca' in this example, has to match bettween the two pages. -->

```
usage once is configurated:

```
<!--    firs config the joker word in both pages -->

<!-- THE LAYER THAT TRIGER THE POPUP -->
<layer name="sdummy19" html="19 pagina externa amb xclose propi" keep="true" type="text" width="100" height="100" align="center" bgcolor="0x223fff"  alpha="1" oy="0"  ox="0" onclick="trace(dummy19)" />

<!-- THE ACTION THAT SET THE ONCLICK ACTION TO THE DUMMY LAYER -->
<action name="accio_s_popup_fullscreen">

    set(layer[sdummy19].onclick,s_popup_fs('special-places/popupfs/index.html'));
	
</action>

```

result:

```
When clicking the layer 'sdummy19' a 100% size popup will cover all the tour. This popup will contain an external page, for example an other tour in other server. In the external tour it will be in some place a close button and when this button is clicked, the external popup will desapear and trigger the after_close action.

```




