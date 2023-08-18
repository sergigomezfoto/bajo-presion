____
____

# S_S_SECURITY
Those actions are created to secure the tours.

---
## s_auth.xml 

Create an auth input that pops at the begining of the tour. The password is stored in a xml inside the tour tree


config
```
styles.xml: 
1.- include the xml that contains the password
2.- modify the texts
3.- modify the colors, blur and styles if needed.

password.xml:
1.- change the password

ENCRIPT!

```

Example:
```
<include url="%FIRSTXML%/plugins/s_bundle/06_s_security/s_auth/s_auth.xml" />
```
result:
```
Before the tour start it will popup an imput to ask for the password. If the password match it will enter the tour. 

```

</br>

___

## s_authfirebase
Create an auth input that pops at the begining of the tour. The password is stored in a DB firestore/firebase:
https://firebase.google.com/

config
```
[0] create a Firebase account, and a firsetore DB with the following structure:

password > pass > [secretword for the site] (the secret word can be modiffied via firestore whenever).

[1] Modify tour:


index.html:

1.- import firebase-app and firestore. Before all js but after krpano div.
https://firebase.google.com/docs/web/learn-more?authuser=1#expandable-2

    <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js"></script>


styles.xml: 

1.- modify the API key and all the initialization settings in 'initialize080273344' action.
2.- modify the texts
3.- modify the colors, blur and styles if needed.

ENCRIPT!

```


Example:
```
<include url="%FIRSTXML%/plugins/s_bundle/06_s_security/s_authfirebase/s_authfirebase.xml" />
```
result:
```
Before the tour start it will popup an imput to ask for the password. If the password match it will enter the tour. 

```

</br>



___

## s_authfirebasemodular
the ame than s_authfirebase but with latest version of firebase (v9) that is modular, so needs a modular krpano progect.
https://firebase.google.com/
___
</br>
## s_expire
caducity date to the tour. When the expiration date is reached, an action will be launched.

config
```
[1] config

config.xml

<!-- EXPIRATION DATE-->
<s_expiration	
		date="2021 09 09 15:10:00"
	/>	

<!-- FREQUENCY IN SECONDS OF CHEKING EXPIRATION -->
<s_expiration_check
	seconds="3"
/>



<data name="s_expiration_advice "><![CDATA[

	El periode de visualització</br> ha caducat amb data:</br></br>

]]></data>

<data name="s_expiration_contact "><![CDATA[
</br>
	<span style="font-size:12px;">contacteu amb: <a style="color:#ffffff" href="mailto:sergi@sergigomez.com"> sergi@sergigomez.com</span>

]]></data>

<!--DEFAULT ACTION AND DESIGN -->

<layer name="s_blackout" keep="true" style="s_blackout"/>

<style name="s_blackout"
	width="100%" 
	height="100%" 
	type="text" 
	html="calc:data[s_expiration_advice].content + s_expiration.date + data[s_expiration_contact].content " 
	css="color:white;text-align:center;font-size:3em;" 
	bgcolor="0x000000" 
	bgalpha="1" 
	alpha="0" 
	autoalpha="true" 
	zorder="20000000000000000000000000000"
	vcenter="true"
/>

		<!-- BEGINNING STATE ACTION BEFORE TOUR IS COMPLETLY RENDERED -->

<action name="s_expiration_beginning_state_action">

	set(layer[s_blackout].alpha,1);

	
	
</action>

	<!-- AFTER EXPIRATION CHECK AND NOT EXPIRED ACTION -->

<action name="s_expiration_aftercheck_ok_action">

	tween(layer[s_blackout].alpha,0,0.2);
	
</action>

		<!-- ACTION WHEN EXPIRATE  -->

<action name="s_expiration_action">

	//HERE YOUR ACTION
	calc(layer[s_blackout].html,data[s_expiration_advice].content + s_expiration.date + data[s_expiration_contact].content  );
	tween(layer[s_blackout].alpha,1,0.2);
	
</action>
	



[2] ENCRIPT!

```


Example:
```
<include url="%FIRSTXML%/plugins/s_bundle/06_s_security/s_expire/s_expire.xml" />

cofigure!
```
result:
```
Before the tour start it will chek if the expiration date is reached( and will coninue checking). When the expiration date is reached it will launch an action. The default is a black layer over all with an advice text.

```

</br>


</br>

___

## s_expirefirebase
Create an auth input that pops at the begining of the tour. The password is stored in a DB firestore/firebase:
https://firebase.google.com/

config:
```
[0] create a Firebase account, and a firsetore DB with the following structure:

password > pass > [secretword for the site] (the secret word can be modiffied via firestore whenever).

[1] Modify tour:


index.html:

1.- import firebase-app and firestore. Before all js but after krpano div.
https://firebase.google.com/docs/web/learn-more?authuser=1#expandable-2

    <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js"></script>


config.xml: 

1.- modify the API key and all the initialization settings in 'initialize080273344' action.
2.- configurate the parameters just the same than s_expire (non firebase).

ENCRIPT!

```


Example:
```
<include url="%FIRSTXML%/plugins/s_bundle/06_s_security/s_authfirebase/s_authfirebase.xml" />
```
result:
```
Before the tour start it will popup an imput to ask for the password. If the password match it will enter the tour. 

```

</br>
