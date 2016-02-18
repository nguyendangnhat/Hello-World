jQuery(document).ready(function ($) {
            
            var jssor_1_SlideshowTransitions = [
              {$Duration:1200,$Opacity:2}
            ];
            
            var jssor_1_options = {
              $AutoPlay: true,
              $SlideshowOptions: {
                $Class: $JssorSlideshowRunner$,
                $Transitions: jssor_1_SlideshowTransitions,
                $TransitionsOrder: 1
              },
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
              }
            };
            
            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
            
            //responsive code begin
            //you can remove responsive code if you don't want the slider scales while window resizing
            function ScaleSlider() {
                var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
                if (refSize) {
                    refSize = Math.min(refSize, 1000);
                    jssor_1_slider.$ScaleWidth(refSize);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }
            ScaleSlider();
            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);
            //responsive code end
        });

function tabhome()
{
    document.getElementById("h").style.display = 'block';
    document.getElementById("c").style.display = 'none';
    document.getElementById("t").style.display = 'none';
    document.getElementById("tieude").innerHTML ="TRANG CHỦ";
    document.getElementById("idh").classList.add("active");
    document.getElementById("idt").classList.remove("active");
    document.getElementById("idc").classList.remove("active");
}
function tabchuyentien()
{
    document.getElementById("h").style.display = 'none';
    document.getElementById("c").style.display = 'block';
    document.getElementById("t").style.display = 'none';
    document.getElementById("tieude").innerHTML = "CHUYỂN TIỀN";
    document.getElementById("idh").classList.remove("active");
    document.getElementById("idt").classList.remove("active");
    document.getElementById("idc").classList.add("active");
}
function tabthanhtoan()
{
    document.getElementById("h").style.display = 'none';
    document.getElementById("c").style.display = 'none';
    document.getElementById("t").style.display = 'block';
    document.getElementById("tieude").innerHTML = "THANH TOÁN";
    document.getElementById("idh").classList.remove("active");
    document.getElementById("idt").classList.add("active");
    document.getElementById("idc").classList.remove("active");
}