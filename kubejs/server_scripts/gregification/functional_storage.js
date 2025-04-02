
ServerEvents.recipes(event => {

    event.remove({output: /functionalstorage:.*grade/});
    event.remove({output: /functionalstorage:fluid.*/});
    event.remove({output: 'functionalstorage:ender_drawer'});
    event.remove({output: 'functionalstorage:storage_controller'});
    event.remove({output: 'functionalstorage:controller_extension'});
    event.remove({output: 'functionalstorage:armory_cabinet'});
    event.remove({output: 'functionalstorage:compacting_drawer'});
    event.remove({output: 'functionalstorage:simple_compacting_drawer'});
    event.remove({output: 'functionalstorage:framed_storage_controller'});
    event.remove({output: 'functionalstorage:framed_controller_extension'});
    event.remove({output: 'functionalstorage:compacting_framed_drawer'});
    event.remove({output: 'functionalstorage:framed_simple_compacting_drawer'});
    event.remove({output: 'functionalstorage:collector_upgrade'});
    event.remove({output: 'functionalstorage:puller_upgrade'});
    event.remove({output: 'functionalstorage:pusher_upgrade'});

    event.shaped(Item.of('functionalstorage:copper_upgrade'), [
        ' C ',
        'CTC',
        ' C '
    ], {
        C: 'gtceu:double_copper_plate',
        T: 'gtceu:tin_plate'
    });

    event.shaped(Item.of('functionalstorage:iron_downgrade'), [
        ' C ',
        'CTC',
        ' C '
    ], {
        C: 'gtceu:iron_plate',
        T: 'gtceu:tin_plate'
    });

    event.shaped(Item.of('functionalstorage:void_upgrade'), [
        ' O ',
        'OSO',
        ' O '
    ], {
        O: 'minecraft:obsidian',
        S: 'gtceu:soul_infused_plate'
    });

    event.shaped(Item.of('functionalstorage:puller_upgrade'), [
        ' C ',
        'TRT',
        ' T '
    ], {
        C: 'gtceu:lv_conveyor_module',
        T: 'gtceu:tin_plate',
        R: 'minecraft:redstone'
    });

    event.shaped(Item.of('functionalstorage:pusher_upgrade'), [
        ' T ',
        'TRT',
        ' C '
    ], {
        C: 'gtceu:lv_conveyor_module',
        T: 'gtceu:tin_plate',
        R: 'minecraft:redstone'
    });

    event.shaped(Item.of('functionalstorage:storage_controller'), [
        'SSS',
        'GCG',
        'SSS'
    ], {
        S: 'minecraft:stone',
        G: '#forge:glass',
        C: '#gtceu:circuits/lv'
    });

    event.shaped(Item.of('2x functionalstorage:ender_drawer'), [
        'OOO',
        'GPG',
        'OCO'
    ], {
        O: 'minecraft:obsidian',
        G: '#forge:glass',
        P: 'minecraft:ender_pearl',
        C: '#gtceu:circuits/lv'
    });

    [
        '1',
        '2',
        '4'
    ].forEach(size => {
        event.remove({ output: `functionalstorage:framed_${size}` });
        event.shapeless(`1x functionalstorage:framed_${size}`, [`1x functionalstorage:oak_${size}`, 'framedblocks:framed_hammer']);
    })
    event.shapeless('1x functionalstorage:framed_storage_controller', ['functionalstorage:storage_controller', 'framedblocks:framed_hammer']);

    event.shaped('1x functionalstorage:redstone_upgrade', [
        ' R ',
        'PCP',
        ' R '
    ], {
        R: '#forge:dusts/redstone',
        C: 'minecraft:comparator',
        P: '#forge:plates/iron'
    });

    event.shapeless('functionalstorage:pusher_upgrade', [Item.of('functionalstorage:puller_upgrade'), '#forge:tools/screwdrivers']);
    event.shapeless('functionalstorage:puller_upgrade', [Item.of('functionalstorage:pusher_upgrade'), '#forge:tools/screwdrivers']);

});