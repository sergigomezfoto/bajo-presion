
____
____
# S_ELEMENT_EFFECTS
Those actions are aplied to layers or hotspots. and mus be called in onloaded, onclick,onover... parameter or by callwith action.

## s_atribute_blink(atribute,oldvalue,newvalue,blinkdelay,tweendelay,tweentype,infinite);

Change some atributes with a tween delay and a tween type, and after some general delay return to the old value. NOT INFINITE

* atribute:what you want to affect (width? alpha? etc..)
* oldvalue: the starting value
* newvalue: the end value 
* blinkdelay: the time to wait each time, before the blinking
* tweendelay: the time af the transition
* tweentype: the tween type (as in normal tween() action)
* infinite: if true, infinite blink, if false single blink. default false.

Examle:

```
<!-- That's the layer that will change -->
<layer name="sdummy1" keep="true" type="text" width="100" height="100" align="center" bgcolor="0x445577" alpha="1" handcursor="false" onclick="trace(dummy1)" />
<!--  -->
<!-- That's the action that will change the layer -->
<action name="accio_s_atribute_blink" autorun="onstart" >
//[1] BGCOLOR
callwith(layer[sdummy1],s_atribute_blink('bgcolor',0x445577,0x11ff55,5,5,easeinoutback));
delayedcall (10,
    callwith(layer[sdummy1],s_atribute_blink('bgcolor',0xf88a08,0xec00de,5,5,easeinoutback));
);
delayedcall (20,
    callwith(layer[sdummy1],s_atribute_blink('bgcolor',0xec00de,0xdeec00,5,5,easeinoutback));
);
delayedcall (30,
    callwith(layer[sdummy1],s_atribute_blink('bgcolor',0xdeec00,0x11ff55,5,5,easeinoutback));
);

setinterval(bgcolorblink,40, 
    callwith(layer[sdummy1],s_atribute_blink('bgcolor',0x11ff55,0xf88a08,5,5,easeinoutback));
    delayedcall (10,
        callwith(layer[sdummy1],s_atribute_blink('bgcolor',0xf88a08,0xec00de,5,5,easeinoutback));
    );
    delayedcall (20,
        callwith(layer[sdummy1],s_atribute_blink('bgcolor',0xec00de,0xdeec00,5,5,easeinoutback));
    );
    delayedcall (30,
        callwith(layer[sdummy1],s_atribute_blink('bgcolor',0xdeec00,0x92f1ff,5,5,easeinoutback));
    );
);	
//[2] ALPHA
<!-- setinterval(alphablink,4, 
    callwith(layer[sdummy1],s_atribute_blink('alpha',1,0.5,1,2,easeinoutquad));
);	 -->
//[3] WIDTH
setinterval(widthblink,2, 
    callwith(layer[sdummy1],s_atribute_blink('width',100,50,1,0.2,easeinoutquad));
);
//[4] HEIGHT
setinterval(heightblink,3, 
    callwith(layer[sdummy1],s_atribute_blink('height',100,50,1,0.2,easeinoutquad));
);
//[5] ROUNDEDGE
setinterval(roundedgeblink,3, 
    callwith(layer[sdummy1],s_atribute_blink('roundedge',0,50,1,0.2,easeinoutquad));
);
//[6] ROTATE
setinterval(rotateblink,3, 
    callwith(layer[sdummy1],s_atribute_blink('rotate',0,360,1,1.5,easeinoutquad));
);
</action>
``` 
result:

```
    The layer (a square), will change it's form color amb shape with the frequency given in the intervals

``` 
</br>

___

## s_set_bg_random_color()

Called on onloaded or similar, set a random bg color to the layer/hspot pointed

example:
```
<!-- That's the layer that will change -->
<layer name="sdummy1" keep="true" type="text" width="100" height="100" align="center" bgcolor="0x445577" alpha="1" handcursor="false" onclick="trace(dummy1)" />


<!-- That's the action that will change the layer -->
<action name="accio_s_random_bg" autorun="onstart" >

callwith(layer[sdummy1],s_set_bg_random_color());

</action>
```
result:
```
the sdummy1 layer will have a random background color
```
</br>

___

## s_moove_hs_as_group(groupname)

Group ath and atv of diferent hotspots

* groupname: The name of the main object that contains the central ath atv

example:

```
<!-- the hotspots -->
<hotspot name="he1"  style="hotspot_examples" ath="0" atv="-25" group="s_hspopups"
html="he1"               
/>	

<hotspot name="he2"   style="hotspot_examples" ath="0" atv="-20" group="s_hspopups"
html="he2"    
/>

<!-- the style of the hotspots with the action called in onloaded atribute -->
<style name="hotspot_examples"
  type="text" 
  align="left"
  css="text-align:left;"
  distorted="true"
  autowidth="auto"
  autoheight="auto"
  padding="10"
  alpha="1" 
  onloaded="s_moove_hs_as_group(get(group));"  
/>
<!-- the group object with the main ath atv -->
<s_hspopups
ath="-40"
atv="0"
/>


```

result:

```
the ath of the two hs will be relative to the group ath, so both will be mooved to ath -40 but respecting their own ath.
```



</br>

___

## s_drag(direction,preaction,whileaction,postaction) 

drag a Layer or Hotspot

* direction: xy or x or y . default or non set is xy
* preaction:action to trigger at ondown
* whileaction:action to trigger while dragging (in loop)
* postaction:action to trigger just ant the end of dragging. The action: s_dragg_limits(name) is specialy made to forbid the layer to go out of the STAGE.
	
	* s_dragg_limits(name); -> designed for layers with LEFT aligment
		* name: name of the draggable layer	

variables created:

hotspots:

* s_[CALLERNAME]_iniath: ath before dragging
* s_[CALLERNAME]_iniatv: ath before dragging
* s_[CALLERNAME]_moving: true if is currently being dragged, false at the end
* s_[CALLERNAME]_movingath: ath while dragging
* s_[CALLERNAME]_movingatv: atv while dragging
* s_[CALLERNAME]_finalath: ath just when end dragging
* s_[CALLERNAME]_finalatv: atv just when end dragging

layers:

* s_[CALLERNAME]_inix: x before dragging
* s_[CALLERNAME]_iniy: y before dragging
* s_[CALLERNAME]_moving: true if is currently being dragged, false at the end
* s_[CALLERNAME]_movingx: x while dragging 
* s_[CALLERNAME]_movingy: y while dragging
* s_[CALLERNAME]_finalx: x just when end dragging
* s_[CALLERNAME]_finaly: y just when end dragging

general:

* s_current_dragging: name of current item being dragged, deleted at the end
* s_last_dragging:last item that has been dragged
* s_[CALLERNAME]_stopdragging: stop dragging
* s_drag_[CALLERNAME]_direction: store the direction and can be changed dynamicly. xy,x or y



example:

```
<!-- the dragable layer -->
	<layer name="sdummy1" html="1 drag" 
	keep="true" 
	type="text" 
	width="100" 
	height="100" 
	align="center" 
	bgcolor="0x999922"  
	alpha="1" 
	y="0"  
	x="0"  
	enabled="true"
	ondown="s_drag(,,,s_dragg_limits(sdimmy1))" 
	onup="" 
	/>

<!--the dragable hotspot  -->
	<hotspot name="hes1"
	html="1 drag" 
	keep="true"
	distorted="true"
	type="text" 
	width="100" 
	height="100" 
	align="rightbottom" 
	bgcolor="0xee3922"  
	alpha="1" 
	ath="21"  
	atv="0"  
	enabled="true"
	ondown="s_drag(y,trace('inici drag'),trace('movent'),trace('final de moviment'))" 

	/>


```

result:

```
layer 'sdummy1' will be gragable on every direction, but never will go out of screen, because s_dragg_limits(sdummy1);
hotspot 'hes1' will be dragable only in y direction and pre while and post actions will be triggered.
```
___

## s_glitch_something(values,tween_delays,atribute);

infinite glitch of something

* values:lower|higher value to glitch: is divided by 100 ex:glitch alpha from 0.8 to 1 it bust be: 85|100
* tween_delays:lower|higer tween delay between glitches: is divided by 10 ex: delay between 0 to 0.3 it must be 0|3
* atribute:what you want to glitch ex: alpha
* token: token name. to clear the action

variables created:
* TOKEN: if there is the token and is set externally to 'clear the action will be killed. (must set the final value manually with delayed call higer thant the maximim tweens_delays argument)
example:

```
<!-- element with the action in onloaded -->
<style name="status_indicator"
	type="text"
	align="center"
	bg="false"
	css="text-align:center;font-family:Computer;font-size:24px;color:#33ff33; text-shadow:0 0 0px #33ff33, 0 0 5px #33ff33,0 0 10px #33ff33, 0 0 20px #33ff33;"
	width="100%"
	padding="2"
	height="30"
	vcenter="true"
	alpha="1"
	html="1: A = A"
	onloaded="s_glitch_something(85|100,0|3,alpha,status);"
/>
<layer name="status_indicator" keep="true" style="status_indicator"/>

<action autorun="onstart">
delayedcall(10,set(status,'clear'););
</action>

```

result:

```
the layer 'status_indicator' will be glitching their alpha from 0.85 to 1, and with a random frequecy of 0 to 0.3.
in 10 seconds will clear the token status resulting on a glitch stop. The alpha will bé the last random.
```