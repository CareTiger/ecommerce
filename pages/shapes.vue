<template>
    <div class="mw6-ns center pa3 shapes">
        <h1>This is my profile</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <img src="/products/1.jpg" alt="" class="mw5-ns mw4 fl">        
        <p>Habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat. Eget velit aliquet sagittis id consectetur. Elit duis tristique sollicitudin nibh sit amet commodo nulla. Enim neque volutpat ac tincidunt vitae semper quis. Accumsan in nisl nisi scelerisque. Elementum eu facilisis sed odio morbi quis commodo. Pulvinar elementum integer enim neque volutpat. Libero enim sed faucibus turpis in eu. Sit amet venenatis urna cursus. Elementum integer enim neque volutpat ac tincidunt. Massa enim nec dui nunc mattis. Suscipit adipiscing bibendum est ultricies integer. Eget felis eget nunc lobortis mattis aliquam faucibus purus. Lacus viverra vitae congue eu consequat. Neque gravida in fermentum et sollicitudin ac. Lectus mauris ultrices eros in cursus. Gravida neque convallis a cras. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
    </div>
</template>

<style lang="scss" scoped>
// https://alistapart.com/article/css-shapes-101/


@font-face {
    font-family: "Jost";
    src: url("~static/fonts/JostVariableFont.woff2") format("woff2");
}

.shapes {
    font-family: "Jost", "Helvetica Neue", Arial, sans-serif;
}


img {
    shape-outside: circle();
}
</style>