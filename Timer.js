<style>
#countdown_def {
height: 100px;
width: 230px;
margin: auto;
margin-bottom: 30px;
}
ul.countdown_default {
margin: 0px;
float: left;
padding: 0px;
}
ul.countdown_default li {
display: block;
background: #fff url('http://1.bp.blogspot.com/-C0D6Mz3MsfI/Uosx6kdekwI/AAAAAAAAAso/lWwGXh8h3sk/s1600/js_bac.png') no-repeat left top!important;
width: 50px;
text-align: center;
position: relative;
float: left;
height: 70px;
margin-left: 5px;
padding: 0px;
}
.timeRefDays, .timeRefMinutes, .timeRefHours, .timeRefSeconds {
width: 50px;
}
ul.countdown_default li span {
font-size: 22px;
font-weight: bold;
color: #fff;
line-height: 72px;
position: relative;
}
ul.countdown_default li span::before {content: '';width: 100%;height: 1px;position: absolute;top: 31px}
ul.countdown_default li p.timeRefDays,
ul.countdown_default li p.timeRefHours,
ul.countdown_default li p.timeRefMinutes,
ul.countdown_default li p.timeRefSeconds {
margin-top: 1em;
color: #909091;
text-transform: uppercase;
font-size: 10px;}
</style>
<script type="text/javascript">
/*<![CDATA[*/
/*MBL jQuery Countdown Widget*/
(function(b) {
    function n() {
        var b = document.createElement("canvas");
        return !(!b.getContext || !b.getContext("2d"))
    }
    b.fn.countdown = function(d, p) {
        function q() {
            currentDate = Math.floor(((new Date).getTime() - e.offset) / 1E3);
            f < currentDate ? (null != a.callback && a.callback.call(this), "undefined" != typeof r && clearInterval(r)) : (seconds = f - currentDate, days = Math.floor(seconds / 86400), seconds -= 86400 * days, hours = Math.floor(seconds / 3600), seconds -= 3600 * hours, minutes = Math.floor(seconds / 60), seconds -= 60 * minutes, "knob" != a.skin ? (0 != a.format && (days = 2 <= String(days).length ? days : "0" + days, hours = 2 <= String(hours).length ? hours : "0" + hours, minutes = 2 <= String(minutes).length ? minutes : "0" + minutes, seconds = 2 <= String(seconds).length ? seconds : "0" + seconds), g.text(days), h.text(hours), k.text(minutes), l.text(seconds), 1 == days ? g.parent().children(".timeRefDays").text("Day") : g.parent().children(".timeRefDays").text("Days"), 1 == hours ? h.parent().children(".timeRefHours").text("Hour") : h.parent().children(".timeRefHours").text("Hours"), 1 == minutes ? k.parent().children(".timeRefMinutes").text("Minute") : k.parent().children(".timeRefMinutes").text("Minutes"), 1 == seconds ? l.parent().children(".timeRefSeconds").text("Second") : l.parent().children(".timeRefSeconds").text("Seconds")) : (g.val(days).trigger("change"), h.val(hours).trigger("change"), k.val(minutes).trigger("change"), l.val(seconds).trigger("change")))
        }
        var a = {
            skin: "countdown_default",
            fallbackSkin: "countdown_default",
            option: {
                day: {
                    max: null,
                    eClass: "days"
                },
                hour: {
                    max: 23,
                    eClass: "hours"
                },
                minute: {
                    max: 59,
                    eClass: "minutes"
                },
                second: {
                    max: 59,
                    eClass: "seconds"
                }
            },
            dateStart: null,
            dateEnd: null,
            format: !0,
            callback: null
        }, e = {
                timezone: !1,
                offset: 0
            };
        d && b.extend(!0, a, d);
        p && b.extend(!0, e, p);
        var f = (new Date(a.dateEnd)).getTime() / 1E3,
            m = (new Date(a.dateStart)).getTime() / 1E3,
            c = (new Date).getTime();
        if (isNaN(f)) alert("Invalid or null dateEnd mm/dd/yyyy. Example: 12/25/2013 17:30:00"), b(this).append("Invalid or null date mm/dd/yyyy. Example: 12/25/2013 17:30:00");
        else if ("knob" != a.skin || null != m && !isNaN(m))
            if (m > c) alert("Starting date is greater than the current date"), b(this).append("Starting date is greater than the current date");
            else {
                !0 == e.timezone && (e.offset = 36E5 * parseInt(e.offset) + 6E4 * (new Date).getTimezoneOffset());
                c = b(this);
                "undefined" != typeof d.option && "undefined" == typeof d.option.global && (d.option.global = {});
                a.option.day = b.extend(!0, {}, a.option.global, a.option.day);
                a.option.hour = b.extend(!0, {}, a.option.global, a.option.hour);
                a.option.minute = b.extend(!0, {}, a.option.global, a.option.minute);
                a.option.second = b.extend(!0, {}, a.option.global, a.option.second);
                "knob" == a.skin.toLowerCase() && n ? (a.skin = a.skin.toLowerCase(), c.append('<input class="' + a.option.day.eClass + '" type="text" value="0" data-readonly="true" /><input class="' + a.option.hour.eClass + '" type="text" value="0" data-readonly="true" /><input class="' + a.option.minute.eClass + '" type="text" value="0" data-readonly="true" /><input class="' + a.option.second.eClass + '" type="text" value="0" data-readonly="true" />'), a.option.day.eClass = "." + a.option.day.eClass.split(" ").join("."), a.option.hour.eClass = "." + a.option.hour.eClass.split(" ").join("."), a.option.minute.eClass = "." + a.option.minute.eClass.split(" ").join("."), a.option.second.eClass = "." + a.option.second.eClass.split(" ").join("."), a.option.day.max = Math.floor((f - m) / 86400), c.find(a.option.day.eClass).knob(a.option.day), c.find(a.option.hour.eClass).knob(a.option.hour), c.find(a.option.minute.eClass).knob(a.option.minute), c.find(a.option.second.eClass).knob(a.option.second)) : ("knob" == a.skin.toLowerCase() || n ? c.append('<ul class="' + a.skin + '" ><li><span class="' + a.option.day.eClass + '">00</span><p class="timeRefDays">Days</p></li><li><span class="' + a.option.hour.eClass + '">00</span><p class="timeRefHours">Hours</p></li><li><span class="' + a.option.minute.eClass + '">00</span><p class="timeRefMinutes">Minutes</p></li><li><span class="' + a.option.second.eClass + '">00</span><p class="timeRefSeconds">Seconds</p></li></ul>') : (a.skin = a.fallbackSkin, c.html('<ul class="' + a.skin + '"><li><span class="' + a.option.day.eClass + '">00</span><p class="timeRefDays">Days</p></li><li><span class="' + a.option.hour.eClass + '">00</span><p class="timeRefHours">Hours</p></li><li><span class="' + a.option.minute.eClass + '">00</span><p class="timeRefMinutes">Minutes</p></li><li><span class="' + a.option.second.eClass + '">00</span><p class="timeRefSeconds">Seconds</p></li></ul>')), a.option.day.eClass = "." + a.option.day.eClass.split(" ").join("."), a.option.hour.eClass = "." + a.option.hour.eClass.split(" ").join("."), a.option.minute.eClass = "." + a.option.minute.eClass.split(" ").join("."), a.option.second.eClass = "." + a.option.second.eClass.split(" ").join("."));
                var g = c.find(a.option.day.eClass),
                    h = c.find(a.option.hour.eClass),
                    k = c.find(a.option.minute.eClass),
                    l = c.find(a.option.second.eClass);
                q();
                if (f > (new Date).getTime() / 1E3) var r = setInterval(function() {
                    q()
                }, 1E3)
            } else alert("Invalid or null dateStart mm/dd/yyyy. Example: 12/25/2013 17:30:00"), b(this).append("Invalid or null dateStart mm/dd/yyyy. Example: 12/25/2013 17:30:00")
    }
})(jQuery);
/*]]>*/
</script>
