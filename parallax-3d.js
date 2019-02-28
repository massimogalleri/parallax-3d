{


    const _gallery = document.getElementById('gallery'),
        _img = document.querySelectorAll('img'),
        _controller = new ScrollMagic.Controller(),
        _imgLoad = imagesLoaded(_gallery);

    _imgLoad.on('progress', function(imgLoad, image) {

        image.img.className = image.isLoaded ? 'img-loaded' : 'is-broken';

        document.querySelectorAll('.img-loaded').forEach(function(_item) {

            new ScrollMagic.Scene({
                    triggerElement: _item,
                    duration: _item.height
                })
                .addTo(_controller)
                .setClassToggle(_item, 'in-viewport');
        });


    });


    _img.forEach(function(_item) {
        _item.src = _item.dataset.src;
        document.addEventListener('mousemove', function(e) {
            let scrollTop = document.documentElement.scrollTop,
                xAxis = (window.innerWidth / 2 - e.pageX) / 50,
                yAxis = (window.innerHeight / 2 - (e.pageY - scrollTop)) / 50;
            if (_item.classList.contains('in-viewport')) {
                _item.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`; //
            }
        });

    });

}