____
____

# S_TIME
Those actions are clocks calendars elapsed times, countdown... al related with time

---
## s_looking_countdown(time,pitch,finalaction); 
###### `to be called directly in onload or callwith to a text layer or hotspot`

Create a count-down that is atributted to a text layer or hotspot. It can be h:m:s or m:s or s, and you can pause and clear the count-down using special variables.
If you change the browser tab, this action will pause and resume again when the tour tab is beeing viewed. 

* time: (separtated by ":") h:m:s (10:30:59), or m:s (70:59) or s (200).
* pitch: the time to change the seconds. By default 1 s.
* finalaction: the action that will trigger at the end of count down.

variables created:

+ s_looking_countdown[caller.name]_pause: set to "true" to pause the count down or "false" to resume.
+ s_looking_countdown[caller.name]_clear: set to "true to stop the count down"

usage (h:m:s):
```
<!--  THE LAYERS THAT WILL CONTAIN THE COUNT DOWN -->
	<layer name="sdummy1" html="1 s_countdown looking: h:m:s" keep="true" type="text" width="100" height="100" align="center" bgcolor="0x999922"  alpha="1" oy="-200"  ox="-200" onclick="trace(dummy1)" />

	<layer name="sdummy2" html="2 s_countdown looking: m:s"  keep="true" type="text" width="100" height="100" align="center" bgcolor="0x445577" alpha="1" oy="-200"   onclick="trace(dummy2)"/>

	<layer name="sdummy3" html="3 s_countdown looking: s"  keep="true" type="text" width="100" height="100" align="center" bgcolor="0x4f2f66" alpha="1"  oy="-200"  ox="200" onclick="trace(dummy3)"/>
<!-- THE ACTION THAT ASSOCIATE EACH COUNT DOWN -->
<action name="accio_s_countdown_min_sec" autorun="onstart">

    callwith(layer[sdummy1],s_looking_countdown(2:15:30,1,trace('END H:M:S')););

    callwith(layer[sdummy2],s_looking_countdown(70:59,1,trace('END M:S')););

    callwith(layer[sdummy3],s_looking_countdown(180,1,trace('END S')););

</action> 

```
result:
```
Three countdowns will start at the beggining. In layer "sdummy1" a count down of 2h 15m 30s,  in "sdummy2" 70m 59s and in "sdummy3" 180s. When each countdowns rise the 0 it will be trigged each final action. If the user change the browser tab or minimize, those countdowns will wait until the user start viewing again. 

```

</br>

___


## s_countdown_to_date(date,pitch,finalaction,text_expiration,cn); 
###### `to be called directly in onload or callwith to a text layer or hotspot`

Create a count-down toa speciffied date that is atributted to a text layer or hotspot. It can be d:h:m:s or h:m:s or m:s or s, and you can clear the count-down using special variable.
If you change the browser tab, this action will continue running. If at the first beginning of action the diference between the current date and the final date is > 0 days,the text layer will show: d h:m:s, if > 0 hours h:m:s if > 0 minutes m:s if < 60 minutes, m.

* date: in any javascript nomenclature, recomended: in ISO8601 nomenclature without needing the Z: '2031/11/02 23:05:01'
* pitch: the time to consult the internal time.Change it carefully or leave-it empty.
* finalaction: the action that will trigger at the end of count down.
* text_expiration: what will say the text element at the end of the countdown.
* cn: If filled with a name of layer or hotspot, the caller will become that element (only interesting if calling it in complex actions).

variables created:

+ s_looking_countdown[caller.name]_clear: set to "true to stop the count down"

usage:
```
<!--  THE LAYERS THAT WILL CONTAIN THE COUNT DOWN -->
    <layer name="sdummy4" html="4 s_countdown_to_date"  keep="true" type="text" width="150" height="100" align="center" bgcolor="0x993f52"  alpha="1" oy="0" ox="-200" onclick="trace(dummy4)" />

	<layer name="sdummy5" html="5 s_countdown_to_date"  keep="true" type="text" width="150" height="100" align="center" bgcolor="0x43f577" alpha="1"  oy="0"  onclick="trace(dummy5)"/>

<!-- THE ACTION THAT ASSOCIATE EACH COUNT DOWN -->
<action name="accio_s_countdown_to_date" autorun="onstart">

	callwith(layer[sdummy4],s_countdown_to_date('Tue Sep 14 2021 19:34:15 GMT+0200 (hora de verano de Europa central)',,trace('final action countdown to date'),"fi"););


	callwith(layer[sdummy5],s_countdown_to_date('2021/09/13 19:39:40',,trace('final action countdown to date'),"ja no hi es"););


</action> 

```
result:
```
The count down will start and will counting from current date to the date speciffied, at the end will trigger an action and change the text of the text element. If the date is expired at the begginig of the tour navigation, will trigger the action and change the text immediatly.

```

</br>
___


## s_real_countdown(time,pitch,finalaction,text_expiration,cn); 
###### `to be called directly in onload or callwith to a text layer or hotspot`

Mainly the same than the s_looking_countdown(); but will continue counting even if the user has changed the window, and there are not variables to pause or clear the count down.

* time: the count down time in seconds( 1m-> 60, 1h-> 3600, 1d-> 86400 )
* pitch: the time to consult the internal time.Change it carefully or leave-it empty.
* finalaction: the action that will trigger at the end of count down.
* text_expiration: what will say the text element at the end of the countdown.
* cn: If filled with a name of layer or hotspot, the caller will become that element (only interesting if calling it in complex actions).


usage:
```
<!--  THE LAYERS THAT WILL CONTAIN THE COUNT DOWN -->
	<layer name="sdummy6" html="6 s_real_countdown dhms"  keep="true" type="text" width="150" height="100" align="center" bgcolor="0x3f5f66" alpha="1"  oy="0" ox="200"  onclick="trace(dummy6)"/>

	<layer name="sdummy7" html="7 s_real_countdown hms"  keep="true" type="text" width="150" height="100" align="center" bgcolor="0x992f52"  alpha="1" oy="200" ox="-200" onclick="trace(dummy7)" />

	<layer name="sdummy8" html="8 s_real_countdown ms"  keep="true" type="text" width="150" height="100" align="center" bgcolor="0x43f2f5" alpha="1"  oy="200"  onclick="trace(dummy8)"/>

	<layer name="sdummy9" html="9 s_real_countdown s"  keep="true" type="text" width="150" height="100" align="center" bgcolor="0x3f52f5" alpha="1"  oy="200" ox="200"  onclick="trace(dummy9)"/>

<!-- THE ACTION THAT ASSOCIATE EACH COUNT DOWN -->
<action name="accio_s_real_countdown">

	
		callwith(layer[sdummy6],s_real_countdown(86500 ,,trace('final rela countdown'),"super expired"));
		delayedcall (10, set(s_countdown_to_datesdummy6_clear,true););
	
		callwith(layer[sdummy7],s_real_countdown(86300,,trace('final rela countdown'),"super expired"));
	
		callwith(layer[sdummy8],s_real_countdown(240,,trace('final rela countdown'),"super expired"));
	
		callwith(layer[sdummy9],s_real_countdown(58,,trace('final rela countdown'),"super expired"));
	
</action>

```
result:
```
The count down will start and at the end will trigger an action and change the text of the text element. 

```

</br>

---

## s_calendar(mode,lan,pitch,date)
###### `to be called directly in onload or callwith to a text layer or hotspot`
display the date of today in numbers or in text in a layer or hotspot.

* mode: 'text' the date in text format, 'simple' the adte in numbers.
* lan: if mode text, the languacge of the date
* pitch: how often it update. better leave it empty or change it carefully
* date: if want to display in text an other date.

example:

```

<!-- THE LAYERS -->
	<layer name="sdummy10" html="10 " keep="true" type="text" width="150" height="100" align="center" bgcolor="0x999922"  alpha="1" oy="-200"  ox="-200" onclick="trace(dummy1)" />
	<layer name="sdummy11" html="11 "  keep="true" type="text" width="150" height="100" align="center" bgcolor="0x445577" alpha="1" oy="-200"   onclick="trace(dummy2)"/>
<!-- THE ACTION THAT ASSIGN THE ACTION TO THE LAYERS -->
<action name="accio_s_calendar" autorun="onstart">

	callwith(layer[sdummy10],s_calendar(text,en,1,'1856/12/23'));
	callwith(layer[sdummy11],s_calendar(simple));
	
</action>

```

result:

```

The layer sdummy10 will have as html 'Tuesday, 23 of December of 1856'
The layer sdummy11 will have as html the date of today, ex: '2021/09/18'

```

</br>

----

## s_time(pith)
###### `to be called directly in onload or callwith to a text layer or hotspot`
Display a clock inside a text layer or hotspot

* pitch: the time to update. better leave it empty or change with caution.

example:
```

<!-- THE LAYER -->
<layer name="sdummy12" html="12 "  keep="true" type="text" width="150" height="100" align="center" bgcolor="0x4f2f66" alpha="1"  oy="-200"  ox="200" onclick="trace(dummy3)"/>

<!-- THE ACTION ASSIGNED TO THE LAYER -->

<action name="accio_s_time" autorun="onstart">

	callwith(layer[sdummy12],s_time());

	
</action>

```

result:

```

The layer sdummy12 will have the current time in hh:mm:ss ex: '14:57:32'

```

</br>

----


## s_datenow(date,lenguage,token,UTC); 

It calculate a the current timestamp, date and clock. 
 * date: in javascript sintax. (if empty current pc date, so now!)
 * language: en,es,ca (not needed if only working with numbers)
 * token: if filled will create unique variables adding the tokenword at the end of variables created: token: rafa -> s_timestamp_varrafa, s_timestamp_sec_varrafa... If empty s_timestamp_var, (will create a single variable that can bé updated calling the action again).
 * UTC: if filled with something (recomended 'UTC'), will return the day, clock and all in UTC.



variables created: (If no token. If token -> s_timestamp_vartoken)

* s_timestamp_var: contains the current timestamp
* s_timestamp_sec_var: contains the current timestamp in seconds
* s_calendar_var: contains the current day / month / year
* s_year_var: contains the current year
* s_month_var: contains the current month
* s_monthname_var:name of the month (esp, eng, cat)
* s_day_var: contains the current day
* s_weekday_var: the day name in the lenguages selected -> Thursday
* s_weekdayabrlong_var: long abrebiation -> Thu
* s_weekdayabrshort_var: short abrebiation -> T
* s_hour_var: contains the current hour
* s_ampmhour_var: contains the current hour in am/pm
* s_minute_var: contains the current minute
* s_second_var: contains the current second
* s_millisecond_var: contains the current millisecond
* s_clock_var: contains the current hour : minute : second


Example:

```
<action name="accio_timestamp" autorun="onstart" >
    s_datenow();
    asyncloop(!s_timestamp_var,,         
    s_log(s_timestamp_var);
    s_log(s_timestamp_sec_var);
    s_log(s_calendar_var);
    s_log(s_year_var);
    s_log(s_month_var);
    s_log(s_day_var);
    s_log(s_weekday_var);
    s_log(s_weekdayabrlong_var);
    s_log(s_weekdayabrshort_var);
    s_log(s_hour_var);
    s_log(s_ampmhour_var);
    s_log(s_minute_var);
    s_log(s_second_var);
    s_log(s_millisecond_var);
    s_log(s_clock_var);     
            );
</action> 

```
result:
```
INFO: [ s_timestamp_var ]: 1631636588408
INFO: [ s_timestamp_sec_var ]: 1631636588
INFO: [ s_calendar_var ]: 2021/9/14
INFO: [ s_year_var ]: 2021
INFO: [ s_month_var ]: 9
INFO: [ s_day_var ]: 14
INFO: [ s_weekday_var ]: Friday
INFO: [ s_weekdayabrlong_var ]: Fri
INFO: [ s_weekdayabrshort_var ]: F
INFO: [ s_hour_var ]: 18
INFO: [ s_ampmhour_var ]: 6
INFO: [ s_minute_var ]: 23
INFO: [ s_second_var ]: 8
INFO: [ s_millisecond_var ]: 408
INFO: [ s_clock_var ]: 18:23:08
```


</br>
_______

## s_days_in_month(month,year,token);
it calculates the days in current month and also if the first day is monday, thursday.... 0= sunday .... 6= saturday

* month: the number of the month
* year: the year in numbers
* token: token: rafa -> s_days_in_current_month_varrafa, s_timestamp_sec_varrafa... If empty s_days_in_current_month_var, (will create a single variable that can bé updated calling the action again).

variables created: (If no token. If token -> s_timestamp_vartoken)

* s_days_in_current_month_var: the number of the days in the month given
* s_first_weekday_current_month_var: the number of the day of the day 1 in month given: 0= sunday .... 6= saturday

Example:
```
<action name="accio_timestamp" autorun="onstart" >
 s_days_in_month(12,2000,joseplluis);
    s_log(s_days_in_current_month_varjoseplluis);  
   s_log(s_first_weekday_current_month_varjoseplluis);
</action>
```
result:
```
INFO: [ s_days_in_current_month_varjoseplluis ]: 31
INFO: [ s_first_weekday_current_month_varjoseplluis ]: 5
```

</br>

----

## s_elapsed_time(token) 

calculate the elapsed time in hh:mm:ss.ms between two actions or events and store it in a variable. So it needs to be called in two actions or events and in the second one will trigger the result of elapsed time. This action run with the dependency of two more actions that can be called separatly. s_current_timestamp(token); and s_redeable_milli_in_hmsss(milliseconds, token);

* token:  if filled will create unique variables adding the tokenword at the end of variables created: token: rafa -> s_elapsed_timerafa, s_elapsed_timemsrafa... If empty s_timestamp_var, (will create a single variable that can bé updated calling the action again).

variables creatd: (If no token. If token -> s_elapsed_timetoken)

* s_elapsed_time: redeable elapsed time hh:mm:ss.sss
* s_elapsed_timems: elapsed time in milliseconds.

example:

```
<!-- 3 LAYERS: ONE THAT WILL SHOW THE CALCULES AND TWO BUTTONS -->

	<layer name="sdummy13" html="Elapsed time between click button14 and button15 "  keep="true" type="text" width="150" height="100" align="center" bgcolor="0x993f52"  alpha="1" oy="0" ox="-200" onclick="trace(dummy4)" />

	<layer name="sdummy14" html="button14 "  keep="true" type="text" width="150" height="100" align="center" bgcolor="0x43f577" alpha="1"  oy="0"  onclick="trace(dummy5)"/>

	<layer name="sdummy15" html="button15 "  keep="true" type="text" width="150" height="100" align="center" bgcolor="0x3f5f66" alpha="1"  oy="0" ox="200"  onclick="trace(dummy6)"/>

<!-- THE ONCLICK ASSIGNED TO EACH LAYER  -->
<action name="accio_s_elapsed_time" autorun="onstart">
	

	set(layer[sdummy14].enabled,true);
	set(layer[sdummy15].enabled,false);
     
	set(layer[sdummy14].onclick,'accio_sdummy14();');
	set(layer[sdummy15].onclick,'accio_sdummy15();');
	
</action>

<!-- THE ACTIONS FOR EACH BUTTON LAYER  -->

<action name="accio_sdummy14">

    s_elapsed_time(uniqueID);
    set(enabled,false);
    set(layer[sdummy15].enabled,true);
    set(layer[sdummy13].html,'Elapsed time between click button14 and button15 [br] Calculating...'); 
    
</action>

<action name="accio_sdummy15">

    s_elapsed_time(uniqueID);
    set(enabled,false);
    set(layer[sdummy14].enabled,true);
    calc(layer[sdummy13].html,'Elapsed time between click button14 and button15 [br]' + s_elapsed_timeuniqueID + '[br]Milliseconds:[br]' + + s_elapsed_timemsuniqueID );
  
</action>

```

result:

```
when the user click to sdummy14 and then click to sdummy15, sdummy13 will show the elapsed time between the two clicks in redeable time hh:mm:ss.ms and in milliseconds.

```



### s_current_timestamp(token)
Show the current timestamp

* token: create unique variables adding the tokenword at the end of variables created:  -> s_current_timestamp[token].


* s_current_timestamp[token]: contains the current timestamp

### s_redeable_milli_in_hmsms(milliseconds,token)
convert milliseconds to redeable time hh:mm:ss.ms

* milliseconds: the number of milliseconds that want to be transformed to redeable

* token: if filled will create unique variables adding the tokenword at the end of variables created: token: rafa -> s_current_timestamprafa. If empty s_current_timestamp, (will create a single variable that can bé updated calling the action again).

variables created: (If no token. If token -> s_elapsed_timetoken)

* s_elapsed_time: conains the redeable hh:mm:ss.ms