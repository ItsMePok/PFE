# Config

{% hint style="danger" %}
This Page is not complete yet. Check back later
{% endhint %}

<figure><img src="https://github.com/user-attachments/assets/a7627a43-c3d4-4924-8a95-c87394c7d164" alt=""><figcaption></figcaption></figure>

## <img src="https://minecraft.wiki/images/Name_Tag_JE2_BE2.png?cbdc1" alt="" data-size="line"> Identifier: **poke\_pfe:config** <a href="#identifier" id="identifier"></a>

## <img src="https://minecraft.wiki/images/Light_Gray_Bundle_JE1_BE1.png?b552e" alt="" data-size="line"> Stack Size: 64

{% hint style="warning" %}
You need the tag `poke:config` to use this item
{% endhint %}

## Menus:

{% stepper %}
{% step %}
## Configure boss events

## Options:

### Enabled Bosses \[x/x]

#### Toggles for each Boss

{% hint style="info" %}
Settings will not save unless you click the "Save Settings" Button
{% endhint %}

***

### Boss Spawn Chances

#### Weights (higher number will make it more likely to spawn)

{% hint style="info" %}
Settings will not save unless you click the "Save Settings" Button
{% endhint %}

***

### Additional Options

* Boss Event Timing
  * Controls how often a boss event will trigger

{% hint style="info" %}
Settings will not save unless you click the "Save Settings" Button



This setting will only apply after script has been re-initialized



For Worlds:

* leave & rejoin the world
* use the `/reload` command



For Realms:

* close & reopen the realm&#x20;
* have everyone leave for a few minutes (this usually is a lot easier said than done though lol)
{% endhint %}

* Reset To Default
  * Resets the settings to default

{% hint style="info" %}
even if the default changes & you had not changed the settings; you will need to reset to default to apply those changes
{% endhint %}

* Go Back
* Return to the Main Menu

***

### Close

* Closes the UI

***
{% endstep %}

{% step %}
### Configure disabled features

<table><thead><tr><th>Feature</th><th>Default State<select><option value="gwaK5qxnWKzC" label="Enabled" color="blue"></option><option value="kAvPOxtpwdzV" label="Disabled" color="blue"></option></select></th></tr></thead><tbody><tr><td>Quantum Teleporter <mark style="color:orange;">[?]</mark></td><td><span data-option="gwaK5qxnWKzC">Enabled</span></td></tr><tr><td><a href="../tools/rings/kapow-ring.md">Kapow Ring</a> <mark style="color:orange;">[?]</mark></td><td><span data-option="gwaK5qxnWKzC">Enabled</span></td></tr><tr><td>Nuke Ring <mark style="color:orange;">[?]</mark></td><td><span data-option="gwaK5qxnWKzC">Enabled</span></td></tr><tr><td><picture><source srcset="https://github.com/user-attachments/assets/d0155449-ca3c-42a0-97b9-3750cdd5e7a5" media="(prefers-color-scheme: dark)"><img src="https://github.com/user-attachments/assets/c239d81f-8290-4661-a140-45ada10d53de" alt="Sundial." data-size="line"></picture> <a href="../tools/misc/sundial.md">Sundial</a> <a data-footnote-ref href="#user-content-fn-1"><mark style="color:orange;">[?]</mark></a></td><td><span data-option="gwaK5qxnWKzC">Enabled</span></td></tr><tr><td><img src="https://github.com/user-attachments/assets/94e903b2-7c38-477c-a5aa-ac6df0f9a455" alt="Wither Spawner." data-size="line"> <a href="../mobs/bosses/wither-spawner.md">Wither Spawner</a> <a data-footnote-ref href="#user-content-fn-2"><mark style="color:orange;">[?]</mark></a></td><td><span data-option="gwaK5qxnWKzC">Enabled</span></td></tr><tr><td><img src="https://github.com/user-attachments/assets/d8bf2c01-5a2e-48d1-bee2-c0e3bda56380" alt="Bounty." data-size="line"> <a href="../items/misc/boss-event-bounty.md">Bounty</a> <a data-footnote-ref href="#user-content-fn-3"><mark style="color:orange;">[?]</mark></a></td><td><span data-option="gwaK5qxnWKzC">Enabled</span></td></tr><tr><td>Waypoint Menu</td><td><span data-option="gwaK5qxnWKzC">Enabled</span></td></tr><tr><td>Set effects <a data-footnote-ref href="#user-content-fn-4"><mark style="color:orange;">[?]</mark></a></td><td><span data-option="gwaK5qxnWKzC">Enabled</span></td></tr></tbody></table>
{% endstep %}
{% endstepper %}



[^1]: Disabling this will prevent the sundial from changing the time



    **The Sundial can still be obtained but will not functional**

[^2]: Disabling this will prevent the player from using this to spawn a [Wither](https://minecraft.wiki/w/Wither)



    **The Wither Spawner will still be obtainable but will not be functional**

[^3]: Disabling this will prevent players from manually starting a boss event using a Bounty



    Boss events can still occur if enabled within the other settings this just disables the bounty from being used&#x20;



    The Bounty will still be obtainable but will not function

[^4]: Disabled this will prevent equipment from triggering its set effects



    This only applies to things from PFE & other Add-Ons that use the system from PFE
