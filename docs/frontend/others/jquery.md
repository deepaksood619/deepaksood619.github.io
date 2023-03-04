# JQuery

## Introduction

jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.

```js
$ is called dollar sign operator or bling

$('#id') shorthand for jquery('#id')

Don't find this javascript inside until the DOM is parsed by browser
$(document).ready(function() {
    // js code
});

Or

$(function() {
    // js code
});

three ways of targeting elements: by type: $("button"), by class: $(".btn"), and by id $("#target1").
```

## Dev Tips

1. Basic selectors
2. Basic animations
3. Index filters
4. Relationship filters
5. Attribute filters
6. Attribute method
7. Image swap
8. Class methods
9. Content methods
10. Dom Traversals
11. Event Binding

```js
$(document).ready(function() {

    // BASIC SELECTORS
    // using tag and class
    $('p').css('border', '4px solid red');
    $('p.lead').css('border', '4px solid red');
    $('body p.lead').css('border', '4px solid red');

    // using id
    $('#lesson-1').css('border', '4px solid red');
    $('*').css('border', '4px solid red');

    // BASIC ANIMATIONS
    $('.box:first').hide(500).delay(300).show(800);
    $('.box:nth-child(2)').slideUp(500).delay(800).slideDown(800);
    $('.box:nth-child(3)').fadeOut(500).delay(800).fadeIn(800);
    $('.box:nth-child(4)').animate({width: '200px'}, 300);
    $('.box:nth-child(4)').animate({height: '200px'}, 300);
    $('.box:nth-child(4)').animate({bottom: '200px'}, 300);
    $('.box:nth-child(4)').animate({bottom: '200px', left: '200px'}, 800);

    // INDEX FILTERS
    $('p').css('border', '4px solid red');
    $('p:first').css('border', '4px solid red');
    $('p:last').css('border', '4px solid red');
    $('p:gt(2)').css('border', '4px solid red');
    $('p:lt(2)').css('border', '4px solid red');
    $('p:eq(2)').css('border', '4px solid red');

    // RELATIONSHIP FILTERS
    $('h2:has(span)').css('border', '4px solid red');
    $('.box:parent').css('border', '4px solid red');
    $('.box:empty').css('border', '4px solid red');

    // ATTRIBUTE FILTERS
    $('p[class="lead"]').css('border', '4px solid red');
    $('p[name="shorty"]').css('border', '4px solid red');
    $('p[name^="sho"]').css('border', '4px solid red');
    $('a[href$=".co.uk"]').css('border', '4px solid red');

    // ATTRIBUTE METHOD
    // can get class and set a different one
    alert($('p:first').attr('class')); // get the class
    $('p:first').attr('class', 'not-lead'); // set the class

    // IMAGE SWAP
    $('img').attr('src', 'img2.jpg');
    $('img').delay(400).fadeOut(500, function() {
        $(this).attr('src', 'img2.jpg').fadeIn(500);
    });

    CLASS METHODS
    alert($('p:first').hasClass('lead'));
    $('p:first').addClass('blue').removeClass('lead');
    $('p').toggleClass('blue').removeClass('lead');

    CONTENT METHODS
    $('p:first').text('Hey you guuuuuuyyyyyyyysss!'); // change text
    alert($('p:first').text()); // retreive text
    $('p:first').text('hey there <em>buddy</em>');
    $('p:first').html('hey there <em>buddy</em>');
    $('p:first').html('<a href="google.com">link</a>');
    alert($('input').val());
    $('input').val('yo dude!');

    DOM TRAVERSALS
    $('h2:has(span)').children().css('border', '4px solid red');
    $('h2:has(span)').parents().css('border', '4px solid red');
    $('h2:has(span)').parents('section').css('border', '4px solid red'); // limit how far parent to select
    $('h2:has(span)').siblings().css('border', '4px solid red');
    $('h2:has(span)').siblings('p:first').css('border', '4px solid red');
    $('h2:has(span)').siblings('p').first().css('border', '4px solid red');
    $('h2:has(span)').siblings('p').last().css('border', '4px solid red');
    $('h2:has(span)').parents('section').siblings().css('border', '4px solid red');
    $('h2:has(span)').parents('section').siblings().children().css('border', '4px solid red');

    EVENT BINDING
    $('h2').bind('click', function() {
        $(this).toggleClass('blue');
    });

    shortcut for the above click event binding
    $('h2').click(function() {
        $(this).toggleClass('blue');
    })

    $('h2').hover(function() {
        $(this).toggleClass('blue');
    })

    $('html').keypress(function() {
        $(this).toggleClass('blue');
    })

});
```

## Freecodecamp

```js
.addClass()
.removeClass()
.css()
.prop() // change properties of an element, like making button disabled

// ex - $("#target-button").prop("disabled", "true");
.html()
.remove() // remove the html element completely
.appendTo("#left-well")
```

In addition to moving elements, you can also copy them from one place to another.

jQuery has a function called clone() that makes a copy of an element.

For example, if we wanted to copy target2 from our left-well to our right-well, we would use:

`$("#target2").clone().appendTo("#right-well");`

Did you notice this involves sticking two jQuery functions together? This is called function chaining and it's a convenient way to get things done with jQuery.

```js
.parent()
.children()
.closest()
.target:nth-child(n)
.target:even
.target:odd
Ex - $(".class").addClass("button");
```

## JSON APIs and AJAX

APIs - Application Programming Interface are tools that computers use to communicate with one another.

Most web APIs transfer data in a format called JSON. JSON stands for JavaScript Object Notation.

## Convert JSON data to HTML

```js
<script>
    $(document).ready(function() {

    $("#getMessage").on("click", function() {
      $.getJSON("/json/cats.json", function(json) {

        var html = "";
        // Only change code below this line.

        json.forEach(function(val) {
            var keys = Object.keys(val);
            html += "<div class = 'cat'>";
            keys.forEach(function(key) {
            html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
            });
            html += "</div><br>";
        });

        // Only change code above this line.

        $(".message").html(html);

      });
    });
    });
</script>
```

## Render image from Data Sources

`html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>";`

## Prefilter JSON

```js
json = json.filter(function(val) {
    return (val.id !== 1);
});
```

## Get geolocation data

```js
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
    });
}
```

## Random Quote Machine

1. Precache random quotes
2. Tweet and share to facebook
3. Particle effect

## Learned

```js
// To disable a input field
$('#item').prop('disabled', true);
$('#item').prop('disabled', false);
```

<https://www.toptal.com/jquery/interview-questions>
