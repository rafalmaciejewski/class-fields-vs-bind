const { performance } = require('perf_hooks');

class Test {
    a = () => {
        return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur volutpat, sapien nec feugiat vestibulum, sapien orci egestas eros, malesuada feugiat libero lectus bibendum arcu. Suspendisse finibus velit odio, a pretium sapien malesuada vitae. Mauris scelerisque ut massa nec imperdiet. Cras consequat risus diam, a mollis metus vehicula sit amet. Suspendisse aliquam, augue id condimentum rutrum, ipsum ipsum congue nibh, sit amet mollis nulla erat faucibus arcu. Quisque venenatis ligula non odio aliquam, a aliquet ligula rutrum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris non semper felis. Donec semper vehicula pharetra. Fusce tempor sodales orci, ac dapibus risus feugiat et. Sed non sem et magna ullamcorper facilisis et sed lacus. Suspendisse at tempor lacus. Sed in leo a turpis pharetra dictum. Mauris orci tellus, sagittis in viverra ac, placerat vitae dui. Cras erat leo, fermentum vitae molestie volutpat, pretium eget ex. Nam faucibus risus ac arcu eleifend, sed pellentesque massa semper.';
    }

    b = () => {
        return 'Nullam eros odio, porttitor eget quam a, fringilla fermentum mi. Cras volutpat turpis eu mi molestie, vitae vulputate est commodo. Vestibulum sed massa a eros mollis rhoncus vel vel arcu. Maecenas facilisis, mi id egestas rutrum, ante libero cursus risus, a ultrices odio nunc a ante. Mauris laoreet nibh non enim vestibulum facilisis. Donec mauris neque, rhoncus ut interdum ac, sagittis porta orci. Nam pellentesque sodales urna ut feugiat. Nam nec consequat odio. Etiam tempor metus a euismod luctus. Sed gravida, lacus in euismod commodo, ex lorem feugiat dui, vitae porta odio est eu elit. Vestibulum porttitor quam sed laoreet tristique. Donec nec gravida nibh. Sed sit amet eleifend sem. Maecenas sollicitudin urna eget ex suscipit, ultrices finibus mi varius. Mauris ultricies laoreet nibh, sit amet tincidunt quam facilisis in.';
    }

    c = () => {
        return 'Ut varius rutrum lacinia. Etiam accumsan velit ac iaculis malesuada. Proin quis fringilla lorem. Sed fringilla nisi enim, et tristique turpis pellentesque sed. Praesent volutpat ullamcorper massa vel eleifend. Ut ultrices quis enim quis fermentum. Vivamus facilisis, lacus in rhoncus accumsan, augue lectus rutrum ipsum, id dictum quam magna eu metus.';
    }
}

const result = [];

const t0 = performance.now();
for (let i = 0; i < 10000; i++) {
    result.push(new Test());
}
const t1 = performance.now();

console.log(`Time: ${(t1 - t0).toFixed()}ms`);
console.log(`Memory: ${(process.memoryUsage().heapUsed / 1024).toFixed()}`);

module.exports = result;
