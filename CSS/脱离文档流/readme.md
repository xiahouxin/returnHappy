脱离文档流的属性

# float
使用float脱离文档流时，其他盒子会无视这个元素，但其他盒子内的文本依然会为这个元素让出位置，环绕在该元素的周围。

这段代码中把红色的框设置为了左浮，所以红色的框称为了浮动状态（浮动在蓝色框的上面），而蓝色框占用了原来空色框的位置。
注意到，蓝色框中的文本依然认为红色框存在，所以为红色框让出了位置。
由于div是块状元素，所以456出现在下方

# absolute
absolute称为绝对定位，觉得应该称为相对定位，
因为使用absolute脱离文档流后的元素，是相对于该元素的父类（及以上，如果直系父类元素不满足条件则继续向上查询）元素进行定位的，
并且这个父类元素的position必须是非static定位的（static是默认定位方式）。

通过把蓝色的框的position设置为absolute使蓝色的框变为浮动状态，可以看到绿色的框被蓝色的框遮挡。
emmm...，看起来貌似没有问题，但是还记得前面说的absolute是相对谁定位的吗？
相对非static元素的父级定位的，这里蓝框的父级就是html，所以应该是相对于html定位，
但是代码中没有提供相对位置，所以只能浮动在原来该元素在文档流中的位置上方。

# fixed
完全脱离文档流，相对于浏览器窗口进行定位。（相对于浏览器窗口就是相对于html）。

 可以很明显的看出，蓝色的框是相对于html进行定位的。
如果不提供相对位置的话，蓝色的框会浮动在其原先在文档流中的位置上方。