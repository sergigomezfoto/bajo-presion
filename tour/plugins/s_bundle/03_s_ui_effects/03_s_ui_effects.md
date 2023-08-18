
____
____
# S_UI_EFFECTS
Those actions affects the entire user interface.


## s_blockall(bool,type); 

Block all movements and interactions with mouse or keyboard.

* bool: If true, block all, if false, unblock all.
* type: the type of cursor. you can choose from css cursor types: https://www.w3schools.com/cssref/tryit.asp?filename=trycss_cursor

usage:


    <action name="accio_s_blockall " autorun="onstart" >
        s_blockall(true,all-scroll); 
        delayedcall(4,
                    s_blockall(false);
                    );		
    </action>

config:

    // this layer is added to the entire dessign, be carefull with the zorder atribute ad where you include the file.

    <layer name="s_invisible-bloking-layer" keep="true" style="s_invisible-bloking-layer"/>
                                
    <style name="s_invisible-bloking-layer"
            keep="true" 
            preload="true" 
            type="container" 
            autoalpha="true" 
            alpha="0" 
            width="100%" 
            height="100%" 
            bgcolor="0x0076c6" 
            bgalpha="0.8" 
            enabled="true" 
            bgcapture="true"
            zorder="900000000000"
    />
</br>

____

## s_changepointer(picturelayer,clearer); 

Change the pointer picture and put a custom one defined as a normal krpano image layer. Must be an sprite with the first block transparent, so at least need to have two blocks.

* picturelayer: The name of an existing krpano image layer
* clearer: when set to something it will clear the effect and retun to the normal status. Recomended word 'off'

usage:


    <!-- layer to test the action -->
    <layer name="sdummy1" keep="true" type="text" width="100" height="100" align="center" bgcolor="0x445577" alpha="1" handcursor="false" onclick="trace(dummy1)" />

    <action name="accio1_s_changepointer" autorun="onstart">

        set(layer[sdummy1].handcursor,'true');
        set(layer[sdummy1].cursor,'none');
        set(layer[sdummy1].onover,'
            s_changepointer(s_cursor); 
            set(layer[s_cursor].crop,26|0|26|27);
        ');
        set(layer[sdummy1].onout, '
            s_changepointer(s_cursor,off); 
            set(layer[s_cursor].crop,0|0|26|27);
        ');
    </action>

    <!-- pointer assignation -->
    <layer name="s_cursor" keep="true" style="s_cursor_bundle"/> 
    <style name="s_cursor_bundle"
        type="image"
        url="cursor.png"
        crop="0|0|26|27"
        alpha="1"
        enabled="false"
        edge="center"
    />

result:

    The pointer will change when over the "sdummy1" layer and return to normal when out.

config:

    // The style contains de urls and initial crop of the image layer
    that will be used to change the pointer. Change and assign that style to a krpano layer as in the example. 

        <style name="s_cursor_bundle"
        type="image"
        url="cursor.png"
        crop="0|0|26|27"
        alpha="1"
        enabled="false"
        edge="center"
    />
    //if you what that the pointer apears and desapear when oune out and in the screen, uncoment the action: js_s_cursor in config file.

</br>

____

## s_changepointer_key_press(picturelayer,clearer); 

same than s_changepointer but designed for keypress or onhover actions.

____

##  s_steps(object);

It simulate the movement of walking, and also can be used to simulate other movements like electrocutation, alarma clock,etc...

< object

* stepspairs: number of step pairs (group of 'up' AND 'down' ) 
* eachstepduration: duration of each step (only one step!)
* wantcamroll:(bool) want camroll movement?
* intensitybounce: intencity of camroll movement
* wanttilt:(bool) want tilt movement? (vlookto)
* intensityup: intensity of tilt movement
* reprise:(bool) when the movement ends, want to have a small movement of acomodation? 
* factorreprise: factor of this small movement
* tweentypes: the tween type, for the movements
* fovinc: increment of fov for each step
* fovdelayreturn: when all the movement ends, want to retourn to the normal fov?
* fovreturntweentime:when all the movement ends, how much time want to wait to retourn to the normal fov?
* onend: action to call at the end of movement. IMPORTANT!! this action is only called at the end if "onendtime is null or 0"!!!
* onendtime: when there is some number here, the onend action will be called not at the end, but after the delay speciced here.
* clear: to stop an clear the intervals of this action you can change to false this attribute.


/>

usage: (Walking and load a pano after 2 seconds of movement)

	<!-- the trigger layer -->
    <layer name="sdummy1" html="1 setps loadpano" keep="true" type="text" width="100" height="100" align="center" bgcolor="0x999922"  alpha="1" oy="-200"  ox="0" onclick="trace(dummy1)" />

    <!-- the s_steps(action) aplyed to the dummy layer  -->
    <action name="accio_s_steps" autorun="onstart">
            set(layer[sdummy1].onclick,s_steps(dummy_steps););
    </action>

    <!-- the object that configure the s_steps function -->
    <dummy_steps

    stepspairs="60"
    eachstepduration="0.6"

    wantcamroll="true"
    intensitybounce="1.5"

    wanttilt="true"
    intensityup="1.5"

    reprise="true"
    factorreprise="1"

    tweentypes="easeinoutsine"

    fovinc="7"
    fovdelayreturn="1.5"
    fovreturntweentime="3"

    onend="accio_load_pano"
    onendtime="2"
    clear=""
    />

    <!-- the onend action triggered with the delay setted in the "onendtime" object atribute -->
    <action name="accio_load_pano">

    if (xml.scene === "scene_01"
        ,
    loadscene(scene_02, null,KEEPMOVING,OPENBLEND(1.0, 0.0, 0.2, 0.0, linear));
        ,
    loadscene(scene_01, null,KEEPMOVING,OPENBLEND(1.0, 0.0, 0.4, 0.0, linear));
        );	
        
    </action>
                <!-- thes event will kill the movement after blending next pano using the atribute "clear" of the config object -->
                <events name="loadpanodummy" keep="true"
                    onblendcomplete="set(dummy_steps.clear,true)"	
                />
result:

    When click in the "sdummy1" layer, it will start the movement configurated in "dummy_steps" object. after 2 seconds it will be triggered the "accio_load_pano" action, so it will load a new scene. When the pano of the new scene will be blended, the "loadpanodummy" event will stop all the movemens setting the atribute dummy_steps.clear to true. 

ussage: (alarm clock)

	<!-- the trigger layer -->

    <layer name="sdummy2" html="2 setps despertador" keep="true" type="text" width="100" height="100" align="center" bgcolor="0x5f2922"  alpha="1" oy="0"  ox="0" onclick="trace(dummy2)" />

    <!-- the s_steps() action aplyed to the dummy layer  -->
    <action name="something" autorun="onstart">
        set(layer[sdummy2].onclick,s_steps(dummy_despertador););
    </action>

    <!-- the config object for the s_steps() action -->
    <dummy_despertador

    stepspairs="10"
    eachstepduration="0.03"

    wantcamroll="true"
    intensitybounce="3"

    wanttilt="true"
    intensityup="7"

    reprise="true"
    factorreprise="1"

    tweentypes="easeinoutsine"

    fovinc="0"
    fovdelayreturn=""
    fovreturntweentime=""


    onend="accio_despertador"
    onendtime="0"
    clear=""
    />

    <!-- the onend action that will be triggered at the end of movement -->
    <action name="accio_despertador">
        trace('WAKE UP!!!');	
    </action>

result:

    when someone click the "sdummy2" layer, it will start a movement of 10 "steppairs" and each of those steps will have a velocity of 0.03s ("eachstepduration"). At the end of movement it will be triggered the "onend" action that only trace a WAKE UP!!! message.


</br>

________

## s_ui_yes(intensity,timeeach,tweentype,finalaction) and s_ui_no(intensity,timeeach,tweentype,finalaction)

Say yes and no.

* intensity: the intesity of the movement
* timeeach: the time to make each movement
* tweentype: the tween type of each movement
* finalaction: the action that will be called ad the end

usage:

    <layer name="sdummy3" html="3 ui_yes" keep="true" type="text" width="100" height="100" align="center" bgcolor="0xabcdef"  alpha="1" oy="0"  ox="-200" onclick="trace(dummy3)" />
    <layer name="sdummy4" html="4 ui_no" keep="true" type="text" width="100" height="100" align="center" bgcolor="0x5f3f52"  alpha="1" oy="0"  ox="200" onclick="trace(dummy4)" />

    <action name="accio_si_no">
	    set(layer[sdummy3].onclick,s_ui_yes(3,0.25,easeOutQuad,trace('yes!')));
	    set(layer[sdummy4].onclick,s_ui_no(3,0.25,easeOutQuad,trace('no!')));
	
    </action>

result:

    when clicking the layers "sdummy3" and "sdummy4", it will make the movements of yes and no. At the end of the movements, it will trigger the action. trace('yes'), and trace('no').


</br>

________

## s_action_and_move(action,h,v,fov,time)

Triger an action and then move to a h,v and fov, in a defined time. The movement bloks all lines of code after this action, will run after the movement end.
Is a reverse lookto() with the action before start the lookto action. Is blocking, shorter time, and default tween type.

* action: the action to triger
* h: hlookto
* v: vlookto
* fov: final fov
* time: the time to make the movement

usage:

    <hotspot name="he6"  group="s_hsloadpano"  style="hotspot_examples" ath="0" atv="-10"
    html="action and move"   
    onclick="s_action_and_move(setaction1,25.23,-6.86,73,1)" 
    />
             <action name="setaction1">
                
                    set(cotxe,false);
                
            </action>

result:

    First, will occur 'setaction1' action, and then the view will move in 1 second to the lookto coordinates v=25.23 h=-6.86 fov=73