export default {
    _init: {
        _canvas: null,
        _context: null
    },
    _objetcs: {
        _stage: {
            _render: true,
            _update: false,
            _items: [],
        },
        _portals: {
            _render: true,
            _update: false,
            _items: [],
        },
        _planets: {
            _render: true,
            _update: false,
            _items: [],
        },
        _fuels: {
            _render: true,
            _update: false,
            _items: [],
        },
        _ship: {
            _render: true,
            _update: true,
            _items: [],
        },
        _HUD: {
            _render: true,
            _update: false,
            _items: [],
        },
    },
    _fuel: 30,
    _stage: 0,
    _gameLoop: null,
    _canRestart: true,
};