____
____

# S_COUNTERS
Those actions are created to stablish a points sistem in the progect

---
## s_counter(points,token,zero); 

Global sistem for add and control a points counter.

* points: the +, -, * or / points to the global variable created. Must have the mathematic simbol before the value!(be carefull with / and * in negative numbers if there is no minimum limit. also be careful with / control the with decimals!)
* token: an optional token to set a counter with an Unique id. 
* zero: the prefix usually '0' for the points under 10, ex: 01 ... 10, 11, etc... (there is no suport for numbers hover 100, ex: 001 ... 010 ... 100)


variables created:

+ s_counters_globalpoints or s_countertoken: the variable with the current points.(is 'null' before the first calculation, so if you want define it onload). 

autointeraction:

+ layer[token or 's_globalpoints'].html or hotspot[token or 's_globalpoints'].html: if text layer or hotspot is setted with the exact token name or called 's_globalpoints', this action will update his html with the number of current points.

optional configuration:

This action can be called simply directly or with a more complex setup. when called simply it will work just calculating the points and storeing it to the s_counters_globalpoints or s_countertoken and autoupdating the layer/hotspot.

```
<!-- CONFIG OBJECT all the elements are optional. -->

<pepeluis
	initial="10"
	minimum="-20"
	actionminimum="accio_minimum"
	maximum="50"
	actionmaximum="accio_win"
	/>
//pepeluis: the token. if no token because there is only one points sistem or because is the main points sitem then the name of the object has to be: globalpoints
//initial: the initial points. default 0.
//minimum: the minim puntuation that can be. default - infinite
//actionminimum: the action triggered when the minimum is reacehd
//maximum: the maxim puntuation that can be. default + infinite
//actionmaximum: the action triggered when the maximum is reacehd

```

usage(simple):

```
<!--  THE LAYER THAT WILL BE USED TO TRIGGER ON ONCKLICK -->
	<layer name="sdummy10"  html="+1 points"  keep="true" type="text" width="150" height="100" align="center" bgcolor="0x999922"  alpha="1" oy="-200"  ox="-200"/>
    <layer name="sdummy14" html="-20 points"  keep="true" type="text" width="150" height="100" align="center" bgcolor="0x43f577" alpha="1"  oy="0"/>
<!--  THE COUNTER SHOWER (optional) -->
	<layer name="s_globalpoints"  html="GLOBAL POINTS (NOT DEFINED, SO 0)"   keep="true" type="text" width="150" height="100" align="center" bgcolor="0x43f2f5" alpha="1"  oy="200"  onclick="trace(dummy8)"/>

<!-- THE ACTION THAT ASSOCIATE EACH POINT OPERATION -->

<action name="accio_punts">
    set(layer[sdummy10].onclick,s_counter(+10) );
    set(layer[sdummy14].onclick,s_counter(-20) );
</action>

```
result:
```
if click layer[sdummy10] will add 10 points to 's_counterglobalpoints', the sdummy14 will rest 20 points. the layer[globalpoints].html will autoupdate with the current points.
```

usage (complex):
```
<!--  THE LAYERS THAT WILL BE USED TO TRIGGER ON ONCKLICK -->
	<layer name="sdummy10"  html="+1 points"  keep="true" type="text" width="150" height="100" align="center" bgcolor="0x999922"  alpha="1" oy="-200"  ox="-200" onclick="trace(dummy1)" />
	<layer name="sdummy11" html="+5 points"   keep="true" type="text" width="150" height="100" align="center" bgcolor="0x445577" alpha="1" oy="-200"   onclick="trace(dummy2)"/>
	<layer name="sdummy12" html="+3 points"   keep="true" type="text" width="150" height="100" align="center" bgcolor="0x4f2f66" alpha="1"  oy="-200"  ox="200" onclick="trace(dummy3)"/>
	<layer name="sdummy13" html="-1 points"   keep="true" type="text" width="150" height="100" align="center" bgcolor="0x993f52"  alpha="1" oy="0" ox="-200" onclick="trace(dummy4)" />
	<layer name="sdummy14" html="-20 points"  keep="true" type="text" width="150" height="100" align="center" bgcolor="0x43f577" alpha="1"  oy="0"  onclick="trace(dummy5)"/>
	<layer name="sdummy15"  html="*2 points" keep="true" type="text" width="150" height="100" align="center" bgcolor="0x3f5f66" alpha="1"  oy="0" ox="200"  onclick="trace(dummy6)"/>
	<layer name="sdummy16"  html="/4 points" keep="true" type="text" width="150" height="100" align="center" bgcolor="0x992f52"  alpha="1" oy="200" ox="-200" onclick="trace(dummy7)" />
<!--  THE COUNTER SHOWER  (optional) -->
	<layer name="pepeluis"  html="GLOBAL POINTS (NOT DEFINED, SO 0)"   keep="true" type="text" width="150" height="100" align="center" bgcolor="0x43f2f5" alpha="1"  oy="200"  onclick="trace(dummy8)"/>

<!-- THE ACTION THAT ASSOCIATE EACH POINT OPERATION -->
<action name="accio_punts">

set(layer[sdummy10].onclick,s_counter(+1,pepeluis) );
set(layer[sdummy11].onclick,s_counter(+5,pepeluis) );
set(layer[sdummy12].onclick,s_counter(+3,pepeluis) );
set(layer[sdummy13].onclick,s_counter(-1,pepeluis) );
set(layer[sdummy14].onclick,s_counter(-20,pepeluis) );
set(layer[sdummy15].onclick,s_counter(*2,pepeluis) );
set(layer[sdummy16].onclick,s_counter(/4,pepeluis) );

</action>

<!-- THE CONFIG OBJECT -->

	<pepeluis
	initial="10"
	minimum="-20"
	actionminimum="accio_minimum"
	maximum="50"
	actionmaximum="accio_win"
	/>
<!-- WIN AND LOOSE ACTIONS -->

<action name="accio_win">
    trace('YYYYYYYYYYYYYYYYYYYOOOOOOOOOOOOOOOOOOOOOUUUUUUUUUUUUUUUUU WIIIIIIIIIIIIIIIINNNNNNNNNNN');
</action>
<action name="accio_minimum">
    trace('YYYYYYYYYYYYYYOOOOOOOOOOOOOOOOOOOUUUUUUUUUUUUUUUUU LOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOST');	
</action>

```
result:
```
When click on layer sdummy10, will add on point. if click on sdummy14 will decrease 20 points. On sdummy15 will multiply by 2 the total points... user will start with 10 points, and puntuation will be between -20 and 50 points. there are a win a loose action pre configured. The current total points are stored in s_counterpepeluis, and the layer[pepeluis].html will autoupdate each time that there is a click in a layer or is called the action.

```

</br>

___
