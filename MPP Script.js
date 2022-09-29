// ==UserScript==
// @name         MPP Script
// @namespace    http://www.multiplayerpiano.com
// @version      2.2
// @description  Multiplayer Piano script
// @author       Oekama
// @include http://www.multiplayerpiano.com/*
// @match http://www.multiplayerpiano.com/script.js
// @grant        none
// ==/UserScript==

(function() {
    $(function ( ) {

    // Язык интерфейса

	var Language = { };
	var Languages =
	{
        'Русский':
		{
			'NewRoom Button'				: 'Новый номер',
			'Midi Button'					: 'Настройки MIDI',
			'PlayAlone Button'				: 'Играть соло',
			'RoomSettings Button'			: 'Настройки',
            'ClearChat Button'				: 'Очистить чат',
            'SetLanguage Button'            : 'Изменить язык',
            'SecretRoom Button'             : 'Тайная комната',
            'Commands Button'               : 'Команды',
			'DropCrown Button'				: 'Снять корону',

			'MuteNotes Tool'				: 'Отключить звук',
			'UnmuteNotes Tool'				: 'Включить звук',
			'MuteChat Tool'					: 'Отключить чат',
			'UnmuteChat Tool'				: 'Включить чат',
			'MuteCompletely Tool'			: 'Добавить в игнор',
			'UnmuteCompletely Tool'			: 'Снять игнор',
			'GiveCrown Tool'				: 'Отдать корону',
			'Kickban Tool'					: 'Заблокировать',

			'Visible Option'				: 'Видимая (Открытая для всех)',
			'Chat Option'					: 'Включить чат',
			'Crownsolo Option'				: 'Играть можете только вы',
			'Background Option'				: 'Цвет фона',

            'NewRoom Title'                 : 'Комната добавлена в список',
			'Midi Title'					: 'Настройки MIDI',
			'MidiInput Title' 				: 'Входные устройства',
			'MidiOutput Title'				: 'Выходные устройства',
			'PlayAlone Title'				: 'Одиночный режим',
            'ClearChat Title'				: 'Уведомление',
            'SecretRoom Title'              : 'Тайная комната',
			'UCanPlay Title'				: 'Вы еще не догадались?!',
            'AudioError Title'              : 'Ошибка',

            'NewRoom Description'           : 'Вы можете пригласить ваших друзей в эту комнату по ссылке в адресной строке браузера',
            'PlayAlone Description'         : 'Ваша комната скрыта от посторонних глаз, однако вы можете пригласить сюда друзей по ссылке в адресной строке браузера',
            'ClearChat Description'			: 'Чат был успешно очищен (Только для вас)',
            'SecretRoom Description'	    : 'Без скрипта и при отсутствии комнаты в списке здесь вас никто не увидит. Даже если вы очень захотите',
			'UCanPlay Description'			: 'На этом пианино можно играть и с клавиатуры. Попробуйте!',
            'AudioError Description'        : 'Не удается загрузить звуковые файлы',

			'Chat Hint'						: 'Введите ваше сообщение',
			'NewNickname Hint'				: 'Ваш новый никнейм',
			'NewRoom Hint'					: 'Название комнаты',

            'MidiEmpty Status'              : 'нет',
            'Crownsolo Status'              : 'В этой комнате может играть только ее владелец',
            'You Status'                    : 'Вы',

            'Help Command'                  : 'Доступные команды',
            'LangExist Command'             : 'Язык интерфейса был изменен на русский',
            'LangNotExist Command'          : 'Этот язык не поддерживается в данной версии',
            'LangExample Command'           : 'Язык',
            'LangList Command'              : 'Доступные языки',
            'UserName Command'              : 'Имя пользователя',
            'UserColor Command'             : 'цвет',
            'LocalTimeAgo Command'          : ' мин. назад',
            'LocalTimeNow Command'          : 'Сейчас',
            'LocalCount Command'            : 'Игроков',
            'LocalColor Command'            : 'цвет фона',
            'LocalChat Command'             : 'всего сообщений',
            'LocalLast Command'             : 'последнее',
            'LocalNoData Command'           : 'Не удается получить информацию по данному запросу',
            'GlobalUsers Command'           : 'Количество пользователей',
            'GlobalRooms Command'           : 'всего комнат',
            'GlobalCrownsolo Command'       : ' с доступом для игры только владельцу',
            'RoomName Command'              : 'Название комнаты',
            'RoomCount Command'             : 'игроков',
            'RoomColor Command'             : 'цвет фона',
            'RoomSettings Command'          : 'настройки',
            'RoomDefault Command'           : 'стандартные',
            'RoomCrownsolo Command'         : 'может играть только владелец',
            'RoomNoChat Command'            : 'чат отключен',
            'RoomNoExist Command'           : 'Комната с таким именем скрыта или не существует',
            'Rename Command'                : 'Теперь я ',
            'RenameRoom Command'            : 'Случайная комната',
            'RenameGlobal Command'          : 'Игроков',
            'RenameCount Command'           : 'комнат',
            'RenameLocal Command'           : 'Игроков',
            'RenameChat Command'            : 'сообщений',
            'Identifier Command'            : 'Идентификатор команды изменен на',
            'NoExist Command'               : 'Такой команды не существует'
		},

		'English':
		{
			'NewRoom Button'				: 'New Room',
			'Midi Button'					: 'MIDI Settings',
			'PlayAlone Button'				: 'Play Alone',
			'RoomSettings Button'			: 'Room Settings',
            'ClearChat Button'				: 'Clear Chat',
            'SetLanguage Button'            : 'Set Language',
            'SecretRoom Button'             : 'Secret Room',
            'Commands Button'               : 'Commands',
			'DropCrown Button'				: 'Drop Crown',

			'MuteNotes Tool'				: 'Mute Notes',
			'UnmuteNotes Tool'				: 'Unmute Notes',
			'MuteChat Tool'					: 'Mute Chat',
			'UnmuteChat Tool'				: 'Unmute Chat',
			'MuteCompletely Tool'			: 'Mute Completely',
			'UnmuteCompletely Tool'			: 'Unmute Completely',
			'GiveCrown Tool'				: 'Give Crown',
			'Kickban Tool'					: 'Kickban',

			'Visible Option'				: 'Visible (Open to everyone)',
			'Chat Option'					: 'Enable Chat',
			'Crownsolo Option'				: 'Only Owner can play',
			'Background Option'				: 'Background color',

            'NewRoom Title'                 : 'Created a Room',
			'Midi Title'					: 'MIDI Connections',
			'MidiInput Title' 				: 'Inputs',
			'MidiOutput Title'				: 'Output',
			'PlayAlone Title'				: 'Playing Alone',
            'ClearChat Title'				: 'Cleared',
            'SecretRoom Title'              : 'Secret room',
			'UCanPlay Title'				: 'Did you know!?',
            'AudioError Title'              : 'Problem',

            'NewRoom Description'           : 'You can invite friends to your room by sending them the link',
            'PlayAlone Description'         : 'You are playing alone in a room by yourself, but you can always invite friends by sending them the link',
            'ClearChat Description'		    : 'Chat was successfully cleared (Only for you)',
            'SecretRoom Description'	    : 'This room isn\'t available to follow the link. Enjoy!',
			'UCanPlay Description'			: 'You can play the piano with your keyboard, too.  Try it!',
            'AudioError Description'        : 'For some reason, an audio download failed',

			'Chat Hint'						: 'You can chat with this thing',
			'NewNickname Hint'				: 'My Fancy New Nickname',
			'NewRoom Hint'					: 'Room Name',

            'MidiEmpty Status'              : 'none',
            'Crownsolo Status'              : 'This room is set to "Only Owner can play"',
            'You Status'                    : 'You',

            'Help Command'                  : 'All commands',
            'LangExist Command'             : 'Language was changed to English',
            'LangNotExist Command'          : 'This language doesn\'t exist',
            'LangList Command'              : 'All languages',
            'UserName Command'              : 'Your nickname',
            'UserColor Command'             : 'color',
            'LocalTimeAgo Command'          : ' min. ago',
            'LocalTimeNow Command'          : 'Now',
            'LocalCount Command'            : 'Count',
            'LocalColor Command'            : 'background',
            'LocalChat Command'             : 'messages count',
            'LocalLast Command'             : 'last message',
            'LocalNoData Command'           : 'No data exists for this query',
            'GlobalUsers Command'           : 'User count',
            'GlobalRooms Command'           : 'room count',
            'GlobalCrownsolo Command'       : ' is set to "Only Owner can play"',
            'RoomName Command'              : 'Room name',
            'RoomCount Command'             : 'user count',
            'RoomColor Command'             : 'background',
            'RoomSettings Command'          : 'settings',
            'RoomDefault Command'           : 'default',
            'RoomCrownsolo Command'         : 'only owner can play',
            'RoomNoChat Command'            : 'chat disabled',
            'RoomNoExist Command'           : 'This room is not visible or doesn\'t exist',
            'Rename Command'                : 'Now i\'m ',
            'RenameRoom Command'            : 'Random room',
            'RenameGlobal Command'          : 'Users',
            'RenameCount Command'           : 'rooms',
            'RenameLocal Command'           : 'Users',
            'RenameChat Command'            : 'messages',
            'Identifier Command'            : 'Command identifier was changed to',
            'NoExist Command'               : 'This command doesn\'t exist'
		},

        '日本語':
		{
			'NewRoom Button'				: '新しいルーム',
			'Midi Button'					: 'MIDIの設定',
			'PlayAlone Button'				: '一人で弾ける',
			'RoomSettings Button'			: 'ルームの設定',
            'ClearChat Button'				: 'チャットを空にする',
            'SetLanguage Button'            : '言語を変える',
            'SecretRoom Button'             : '秘密のルーム',
            'Commands Button'               : 'コマンド',
			'DropCrown Button'				: '王冠を投げ付ける',

			'MuteNotes Tool'				: 'ミュート音',
			'UnmuteNotes Tool'				: 'ミュート解除する音',
			'MuteChat Tool'					: 'ミュートチャット',
			'UnmuteChat Tool'				: 'ミュート解除するチャット',
			'MuteCompletely Tool'			: '完全にミュート',
			'UnmuteCompletely Tool'			: '完全にミュート解除する',
			'GiveCrown Tool'				: '王冠を与える',
			'Kickban Tool'					: '禁止する',

			'Visible Option'				: '目に見える（みんあのために）',
			'Chat Option'					: 'Enable Chat',
			'Crownsolo Option'				: 'Only Owner can play',
			'Background Option'				: '背景の色',

            'NewRoom Title'                 : 'ルームを作った',
			'Midi Title'					: 'MIDIの設定',
			'MidiInput Title' 				: '入力',
			'MidiOutput Title'				: '出力',
			'PlayAlone Title'				: '一人で遊んで',
            'ClearChat Title'				: 'Cleared',
            'SecretRoom Title'              : '秘密のルーム',
			'UCanPlay Title'				: 'Did you know!?',
            'AudioError Title'              : 'Problem',

            'NewRoom Description'           : 'You can invite friends to your room by sending them the link',
            'PlayAlone Description'         : 'あなたはルームで一人で弾きますですけど、あなたはあなたの友達をここに招待できる',
            'ClearChat Description'		    : 'Chat was successfully cleared (Only for you)',
            'SecretRoom Description'	    : 'このルームはハイパーリンクで入れる。楽しんで！',
			'UCanPlay Description'			: 'You can play the piano with your keyboard, too.  Try it!',
            'AudioError Description'        : 'For some reason, an audio download failed',

			'Chat Hint'						: 'あなたのメッセージを入力します',
			'NewNickname Hint'				: 'あなたのニックネーム',
			'NewRoom Hint'					: 'ルームの名前',

            'MidiEmpty Status'              : 'なし',
            'Crownsolo Status'              : 'This room is set to "Only Owner can play"',
            'You Status'                    : 'あなた',

            'Help Command'                  : 'すべてのコマンド',
            'LangExist Command'             : '言語は日本語に変更されました',
            'LangNotExist Command'          : 'この言語がありません',
            'LangList Command'              : 'すべての言語',
            'UserName Command'              : 'あなたの名前',
            'UserColor Command'             : '色',
            'LocalTimeAgo Command'          : '分前',
            'LocalTimeNow Command'          : '今',
            'LocalCount Command'            : 'ユーザーの数',
            'LocalColor Command'            : '背景の色',
            'LocalChat Command'             : 'messages count',
            'LocalLast Command'             : 'last message',
            'LocalNoData Command'           : 'No data exists for this query',
            'GlobalUsers Command'           : 'User count',
            'GlobalRooms Command'           : 'room count',
            'GlobalCrownsolo Command'       : ' is set to "Only Owner can play"',
            'RoomName Command'              : 'Room name',
            'RoomCount Command'             : 'user count',
            'RoomColor Command'             : 'background',
            'RoomSettings Command'          : 'settings',
            'RoomDefault Command'           : 'default',
            'RoomCrownsolo Command'         : 'only owner can play',
            'RoomNoChat Command'            : 'chat disabled',
            'RoomNoExist Command'           : 'This room is not visible or doesn\'t exist',
            'Rename Command'                : '今私は',
            'RenameRoom Command'            : 'Random room',
            'RenameGlobal Command'          : 'Users',
            'RenameCount Command'           : 'rooms',
            'RenameLocal Command'           : 'Users',
            'RenameChat Command'            : 'messages',
            'Identifier Command'            : 'コマンドの識別子は',
            'NoExist Command'               : 'このコマンドがありません'
		}
	}

	function SetLanguage (Title)
	{
        var Options = $('#room-settings').find ('label').get ( );
        var Texts = $('.text').get ( );

		Language = Languages [Title];

        Options [0].childNodes [1].nodeValue = Language ['Visible Option'];
		Options [1].childNodes [1].nodeValue = Language ['Chat Option'];
        Options [2].childNodes [1].nodeValue = Language ['Crownsolo Option'];
        Options [3].childNodes [0].nodeValue = Language ['Background Option'] + ': ';

        Texts [0].placeholder = Language ['NewRoom Hint'];
		Texts [1].placeholder = Language ['NewNickname Hint'];

        $('.more').find ('.translate').html (Language ['NewRoom Button'] + '...');

		$('#new-room-btn').html (Language ['NewRoom Button'] + '...');
		$('#midi-btn').html (Language ['Midi Button']);
		$('#play-alone-btn').html (Language ['PlayAlone Button']);
		$('#room-settings-btn').html (Language ['RoomSettings Button']);
        $('#clear-chat-btn').html (Language ['ClearChat Button']);
        $('#set-lang-btn').html (Language ['SetLanguage Button']);
        $('#secret-room-btn').html (Language ['SecretRoom Button']);
        $('#commands-btn').html (Language ['Commands Button']);
		$('#room-settings').find ('.ugly-button').html (Language ['DropCrown Button']);

        $('#new-room').find ('label').first ( ).get (0).childNodes [1].nodeValue = Language ['Visible Option'];
		$('#chat').find ('input').get (0).placeholder = Language ['Chat Hint'];

        if ($('#Notify-NewRoom').length > 0)
        {
            var CurrentNotify = $('#Notify-NewRoom');

            CurrentNotify.find ('.title').html (Language ['NewRoom Title']);
            CurrentNotify.find ('.text').get (0).childNodes [0].nodeValue = Language ['NewRoom Description'];
        }

        if ($('#Notify-Midi').length > 0)
        {
            var CurrentNotify = $('#Notify-Midi');

            CurrentNotify.find ('.title').html (Language ['Midi Title']);

            CurrentNotify.find ('h1').eq (0).html (Language ['MidiInput Title']);
            CurrentNotify.find ('h1').eq (1).html (Language ['MidiOutput Title']);

            if (CurrentNotify.find ('li').length <= 0)
                CurrentNotify.find ('ul').html ('(' + Language ['MidiEmpty Status'] + ')');
        }

        if ($('#Notify-PlayAlone').length > 0)
        {
            var CurrentNotify = $('#Notify-PlayAlone');

            CurrentNotify.find ('.title').html (Language ['PlayAlone Title']);
            CurrentNotify.find ('.text').get (0).childNodes [0].nodeValue = Language ['PlayAlone Description'];
        }

        if ($('#Notify-ClearChat').length > 0)
        {
            var CurrentNotify = $('#Notify-ClearChat');

            CurrentNotify.find ('.title').html (Language ['ClearChat Title']);
            CurrentNotify.find ('.text').html (Language ['ClearChat Description']);
        }

        if ($('#Notify-SecretRoom').length > 0)
        {
            var CurrentNotify = $('#Notify-SecretRoom');

            CurrentNotify.find ('.title').html (Language ['SecretRoom Title']);
            CurrentNotify.find ('.text').html (Language ['SecretRoom Description']);
        }

        if ($('#Notify-UCanPlay').length > 0)
        {
            var CurrentNotify = $('#Notify-UCanPlay');

            CurrentNotify.find ('.title').html (Language ['UCanPlay Title']);
            CurrentNotify.find ('.text').html (Language ['UCanPlay Description']);
        }

        if ($('#Notify-AudioError').length > 0)
        {
            var CurrentNotify = $('#Notify-AudioError');

            CurrentNotify.find ('.title').html (Language ['AudioError Title']);
            CurrentNotify.find ('.text').html (Language ['AudioError Description']);
        }

        if ($('#crownsolo-notice').length > 0)
            $('#crownsolo-notice').html (Language ['Crownsolo Status']);

        $('#dynamic-styles').html ('#names .name.me:after { content: "' + Language ['You Status'] + '"; position: absolute; top: -6px; right: 5px; font-size: 10px; }');

	}

    // Удаление ненужных элементов

    $('#record-btn').remove ( );
    $('#synth-btn').remove ( );

    $('#social').remove ( );

    // Добавление новых элементов

    var Keys = Object.keys (Languages);
    var Modal = '<div id = "set-language" class = "dialog" style = "display: flex">';

    for (var i = 0; i < Keys.length; i++)
    {
        Modal = Modal + '<div class = "ugly-button green" style = "margin: 10px">' + Keys [i] + '</div>';
    }

    $('#modals').append (Modal + '</div>');

    $('.relative').append ('<div id = "clear-chat-btn" class = "ugly-button" style = "position: absolute; top: 32px"></div>');
    $('.relative').append ('<div id = "set-lang-btn" class = "ugly-button" style = "position: absolute; top: 32px"></div>');
    $('.relative').append ('<div id = "commands-btn" class = "ugly-button" style = "position: absolute; top: 32px"></div>');

    // $('.relative').append ('<div id = "secret-room-btn" class = "ugly-button" style = "position: absolute; top: 32px"></div>');

    $('#clear-chat-btn').bind ('click', function ( )
    {
        MPP.chat.clear ( );
        new Notification ({ id: "ClearChat", title: Language ['ClearChat Title'], html: Language ['ClearChat Description'], duration: 25000 });
    });

    $('#set-lang-btn').bind ('click', function ( ) { openModal ('#set-language'); });

    var Setters = $('#set-language').find ('.ugly-button');
    var Styles =
    [
        function ( ) { $('#commands-btn').css ({ 'border': '1px solid rgb(81, 102, 132)', 'background': 'rgba(107, 116, 162, 0.35)' }); },
        function ( ) { $('#commands-btn').css ({ 'border': '1px solid rgb(101, 150, 255)', 'background': 'rgba(26, 110, 241, 0.156863)' }); },
        function ( ) { $('#commands-btn').css ({ 'border': '1px solid rgb(139, 148, 236)', 'background': 'rgba(40, 110, 144, 0.34902)' }); }
    ];

    for (var i = 0; i < Setters.length; i++)
    {
        Setters.eq (i).bind ('click', function ( ) { SetLanguage (this.innerHTML); closeModal ( ); });
    }

    /*
    $('#secret-room-btn').bind ('click', function ( )
    {
        var Titles = ['script.js#n7Sm571dxN5hES0yA', 'lame.min.js#Fsd0M7yT81NpEr738NmfhZw8HUdNi15Lm2'];

        MPP.client.setChannel (Titles [Math.round(Math.random())], { visible: false });
        new Notification ({ id: "SecretRoom", title: Language ['SecretRoom Title'], html: Language ['SecretRoom Description'], duration: 25000 });
    });
    */

    $('#commands-btn').bind ('click', function (Event)
    {
        Status = (Status != 2) ? Status + 1 : 0;
        Styles [Status] ( );
    });

    $('.relative').append ('<div id = "power"><input type="range" class="power-slider" min="0.0" max="1.0" step="0.01"></div>');

    // Добавление стилей

    $('head').append ('<style type = "text/css">' +
        '.advanced-slider { width: 100%; height: 100%; -webkit-appearance: none; background: url("http://i.imgur.com/UQ2KXd1.png") no-repeat; background-position: 50% 50%; outline: none; }' +
        '.advanced-slider[type=range]::-webkit-slider-thumb { -webkit-appearance: none; width: 28px; height: 28px; background: url("http://i.imgur.com/OvXyok7.png") no-repeat; }' +
        '.power-slider { width: 100%; height: 100%; -webkit-appearance: none; background: url("http://i.imgur.com/lWErq68.png") no-repeat; background-position: 50% 50%; outline: none; }' +
        '.power-slider[type=range]::-webkit-slider-thumb { -webkit-appearance: none; width: 28px; height: 28px; background: url("http://i.imgur.com/4BVpZD3.png") no-repeat; }' +
    '</style>');

    $('head').append ('<style type = "text/css">' +
        '#power { position: absolute; right: 128px; top: 0px; width: 100px; height: 40px; margin: 10px; }' +
    '</style>');

    $('head').append ('<style type = "text/css">' +
        '#chat li .message { margin-right: 6px; color: white; }' +
        '#chat a { text-decoration: none;cursor: pointer;color: #00daff; transition: color 0.1s;} #chat a:hover { color: #8cdaf9; transition: color 0.1s; }' +
        '#chat .time { background: rgba(255, 255, 255, 0.7); color: #2f2f35; border-radius: 5px; padding: 1px 4px 1px 4px; text-shadow: none; }' +
        '#chat .loli { background: rgba(197, 228, 255, 0.7); color: #12111d; border-radius: 5px; padding: 1px 4px 1px 4px; text-shadow: none; }' +
    '</style>');

    $('head').append ('<style id="dynamic-styles" type = "text/css">' +
        '#room .more > div { line-height: initial; margin: 0; padding: 2px 2px 2px 7px; width: 100%; height: 20px; }' +
        '#names .name.me:after { position: absolute; top: -6px; right: 5px; font-size: 10px; }' +
    '</style>');

    $('head').append ('<style type = "text/css">' +
        '.kawaiiSquare { position: absolute; width: 25px; height: 25px; opacity: 0; z-index: 8000; }' +
        '.kawaiiTitle:before { color: rgb(72, 69, 197); content: "๖ۣۜB"; margin: 0 1px 0 0; }' +
    '</style>');

    // Добавление скриптов

    $('head').append ('<script src = "http://cdnjs.cloudflare.com/ajax/libs/mathjs/3.8.1/math.min.js"> </script>');

    // Стилизация элементов

    $('body').css ('background', 'url(http://i.imgur.com/v10QPIH.png)');

    $('.ugly-button').css ({ 'width': '110px', 'border': '1px solid rgb(81, 102, 132)', 'background': 'rgba(107, 116, 162, 0.35)' });
    $('.ugly-button.green').css ({ 'width': '110px', 'border': '1px solid rgb(96, 103, 98)', 'background': 'rgba(171, 183, 176, 0.34902)' });
    $('.dialog').css ({ 'boxShadow': 'none', 'border': '2px solid #daefda' });
    $('.submit').css ({ 'background': '#8a9f8a', 'right': '5px', 'bottom': '5px', 'padding': '7px 7px 4px 7px', 'textShadow': 'none', 'boxShadow': 'none' });
    $('.text').css ({ 'width': '100%', 'padding': '2px 0 0 2px' })

    $('.submit').html ('OK');

    $('#status').css ({ 'width': '50px', 'height': 'auto', 'left': '10px', 'textAlign': 'right' });
    $('#room').css ({ 'width': '280px', 'margin': '16px 80px', 'padding': '7px', 'fontSize': '14px' });
    $('#bottom').css ('background', 'transparent');

    $('#new-room-btn').css ('left', '390px');
	$('#midi-btn').css ('left', '390px');
	$('#play-alone-btn').css ('left', '520px');
    $('#clear-chat-btn').css ('left', '520px');
	$('#room-settings-btn').css ('left', '650px');
    $('#set-lang-btn').css ('left', '650px');
    // $('#secret-room-btn').css ('left', '780px');
    $('#commands-btn').css ({ 'left': '780px', 'border': '1px solid rgb(101, 150, 255)', 'background': 'rgba(26, 110, 241, 0.156863)' });
    $('#room-settings').find ('.ugly-button').css ({ 'margin': '-10px 0 0 0', 'border': '1px solid rgb(96, 103, 98)', 'background': 'rgba(171, 183, 176, 0.34902)' });

    $('#chat').find ('input').css ('padding', '2px 2px 2px 3px');
    $('#volume-label').html (' ');

    // Установка языка по умолчанию

    SetLanguage ('English');

    // Команды чата

    var Identifier = '-';
    var Status = 1;

    var Commands =
    {
        'help': function ( )
        {
            var Keys = Object.keys (Commands);
            var Out = Language ['Help Command'] + ': ';

            for (var i = 0; i < Keys.length; i++)
                Out = Out + Identifier + Keys [i] + ' ';

            chat.send (Out);
        },

        'lang': function (args)
        {
            if (args.replace (' ', '') == '')
            {
                var Keys = Object.keys (Languages);
                var Out = Language ['LangList Command'] + ': ';

                for (var i = 0; i < Keys.length; i++)
                    Out = Out + Keys [i] + ', ';

                chat.send (Out.substring (0, Out.length - 2));
            }
            else if (Languages [args] != undefined)
            {
                SetLanguage (args);
                chat.send (Language ['LangExist Command']);
            }
            else
                chat.send (Language ['LangNotExist Command']);
        },

        'say': function (args)
        {
            if (args [0] == '-')
            {
                chat.send ('Nope');
                return;
            }


            chat.send (args);
        },

        'encode': function (args)
        {
            chat.send (window.btoa (args));
        },

        'decode': function (args)
        {
            chat.send (window.atob (args));
        },

        'calc': function (args)
        {
            chat.send (math.eval (args).toString ( ));
        },

        'user': function (args, user)
        {
            chat.send (Language ['UserName Command'] + ' — ' + user.name + ', ' +
                       Language ['UserColor Command'] + ' — ' + user.color  + ', _ID — ' + user._id + ', ID — ' + user.id);
        },

        'local': function (args)
        {
            var Data = new Object ( );
            var Index = -1;

            if (args.length > 0 && !isNaN (args))
            {
                Index = parseInt (args);
                Data = window.LOG [window.LOG.length - Index];

                if (Data == undefined)
                {
                    chat.send (Language ['LocalNoData Command']);
                    return;
                }
            }
            else
                Data = GetCurrentData ( );

            if (Data.Chat.Last.length > 70)
                Data.Chat.Last = Data.Chat.Last.substr (0, 70) + '..."';

            chat.send ('[' + ((Index != -1) ? (Index.toString ( ) + Language ['LocalTimeAgo Command']) : Language ['LocalTimeNow Command']) + '] ' +
                       Language ['LocalCount Command'] + ' — ' + Data.Room.count + ', ' +
                       Language ['LocalColor Command'] + ' — ' + Data.Room.settings.color + ', ' +
                       Language ['LocalChat Command' ] + ' — ' + Data.Chat.Count  + ', ' +
                       Language ['LocalLast Command' ] + ' — ' + Data.Chat.Last);
        },

        'global': function (args)
        {
            var Rooms = GetCurrentRooms ( );

            if (Rooms == undefined) return;

            var Users = 0;
            var Crownsolo = 0;

            for (var i = 0; i < Rooms.length; i++)
            {
                Users = Users + Rooms [i].count;
                Crownsolo = Crownsolo + Rooms [i].settings.crownsolo;
            }

            chat.send ('[MPP] ' +
                       Language ['GlobalUsers Command'] + ' — ' + Users.toString ( ) + ', ' +
                       Language ['GlobalRooms Command'] + ' — ' + Rooms.length.toString ( ) +
                       ' (' + Crownsolo.toString ( ) + Language ['GlobalCrownsolo Command'] + ')');
        },

        'room': function (args)
        {
            var Rooms = GetCurrentRooms ( );

            if (Rooms == undefined) return;

            for (var i = 0; i < Rooms.length; i++)
                if (Rooms [i]._id.toLowerCase ( ).indexOf (args.toLowerCase ( )) != -1)
                {
                    var Settings = Language ['RoomDefault Command'];

                    if (Rooms [i].settings.crownsolo)
                    {
                        Settings = Language ['RoomCrownsolo Command'];

                        if (!Rooms [i].settings.chat)
                            Settings = Settings + ', ' + Language ['RoomNoChat Command'];
                    }
                    else if (!Rooms [i].settings.chat)
                        Settings = Settings + Language ['RoomNoChat Command'];

                    chat.send ('[MPP] ' +
                               Language ['RoomName Command'] + ' — ' + Rooms [i]._id + ', ' +
                               Language ['RoomCount Command'] + ' — ' + Rooms [i].count + ', ' +
                               Language ['RoomColor Command'] + ' — ' + Rooms [i].settings.color + ', ' +
                               Language ['RoomSettings Command'] + ' — ' + Settings);

                    return;
                }

            chat.send (Language ['RoomNoExist Command']);
        },

        'flip': function (args)
        {
            args = args.toLowerCase ( );

            var Default = 'abcdefghijklmnopqrstuvwxyzабвгдеёжзийклмнопрстуфхцчшщьъэя136890.,!^&*/\[]()?';
            var Flipped = 'ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎzɐƍʚɹɓǝǝжεиņʞvwноudɔɯʎфхǹҺmmqqєʁƖƐ9860˙\'¡v⅋*/\][)(¿';
            var Special = { 'ы': 'ıq', 'Ы': 'ıq', 'ю': 'oı', 'Ю': 'oı' }

            var Out = '';

            for (var i = args.length - 1; i >= 0; i--)
            {
                var Index = Default.indexOf (args [i]);

                if (Index != -1)
                    Out = Out + Flipped [Index];
                else if (Special [args [i]] != undefined)
                    Out = Out + Special [args [i]];
                else
                    Out = Out + args [i];
            }

            chat.send (Out);
        },

        'round': function (args)
        {
            var Default = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン123456789|<>+-*/=一二三四五六七八九十月火水木金土日株有';
            var Rounded = 'ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ㋐㋑㋒㋓㋔㋕㋖㋗㋘㋙㋚㋛㋜㋝㋞㋟㋠㋡㋢㋣㋤㋥㋦㋧㋨㋩㋪㋫㋬㋭㋮㋯㋰㋱㋲㋳㋴㋵㋶㋷㋸㋹㋺㋻㋼㋽㋾㋞➀➁➂➃➄➅➆➇➈⦶⧀⧁⊕⊝⊛⊘⊜㊀㊁㊂㊃㊄㊅㊆㊇㊈㊉㊊㊋㊌㊍㊎㊏㊐㊑㊒㊓㊔㊕㊖㊗㊘㊙㊚㊛㊜㊝㊞㊟㊠㊡㊢㊣㊤㊥㊦㊧㊨㊩㊪㊫㊬㊭㊮㊯㊰🉐🉑';

            var Out = '';

            for (var i = 0; i < args.length; i++)
            {
                var Index = Default.indexOf (args [i]);

                if (Index != -1)
                    Out = Out + Rounded [Index];
                else
                    Out = Out + '⭕️';
            }

            chat.send (Out);
        },

        'rename': function (args)
        {
            if (args.replace (' ', '') == '') return;

            switch (args)
            {
                case 'default':
                    args = 'Caidaro';
                break;

                case 'empty':
                    args = '️';
                break;

                case 'status':
                {
                    var Counter = 0;

                    UpdateTime = setInterval (function ( )
                    {
                        var Global = GetCurrentRooms ( );

                        var GlobalUsers = 0;
                        var GlobalRandom = Global [Math.floor (Math.random ( ) * Global.length)];

                        for (var i = 0; i < Global.length; i++)
                        {
                            GlobalUsers = GlobalUsers + Global [i].count;
                        }

                        var Local = GetCurrentData ( );

                        var LocalUsers = GetCurrentUsers ( );
                        var LocalRandom = LocalUsers [Math.floor (Math.random ( ) * LocalUsers.length)];

                        var Outputs =
                        [
                            Language ['RenameGlobal Command'] + ': ' + GlobalUsers.toString ( ) + ', ' +
                            Language ['RenameCount Command'] + ': ' + Global.length.toString ( ),

                            Language ['RenameRoom Command'] + ': ' + GlobalRandom._id + ' / ' + GlobalRandom.count,

                            Language ['RenameLocal Command'] + ': ' + Local.Room.count + ', ' +
                            Language ['RenameChat Command' ] + ': ' + Local.Chat.Count  + ', ',

                            // Language ['RenameUser Command'] + ': ' + LocalRandom.name + ' / ' + LocalRandom._id,

                            ' -help'
                        ];

                        args = '[MPP] ' + Outputs [Counter];

                        MPP.client.sendArray ([{m: 'userset', set: {name: args }}]);
                        Counter = (Counter < Outputs.length - 1) ? Counter + 1 : 0;

                    }, 4000);

                    return;
                }
                break;
            }

            clearInterval (UpdateTime);

            chat.send (Language ['Rename Command'] + args);
            MPP.client.sendArray ([{m: 'userset', set: {name: args }}]);
        },

        'id': function (args)
        {
            if (args.replace (' ', '') == '') return;

            Identifier = args;
            chat.send (Language ['Identifier Command'] + ' "' + args + '"');
        },

        'version': function (args)
        {
            chat.send ('2.2');
        },

        'js': function (args, user)
        {
            if (user._id != MPP.client.user._id)
                return;

            try
            {
                chat.send (eval (args).toString ( ));
            }
            catch (Exception)
            {
                chat.send (Exception.message.toString ( ));
            }
        }
    }

    var UpdateTime = new Object ( );
    var IsKawaii = false;

    // Запись истории изменений в комнате

    window.LOG = [ ];
    window.ROOMS = new Object ( );

    function OnLoad ( )
    {
        setInterval (function ( ) { window.LOG.push (GetCurrentData ( )); }, 60000);

        MPP.client.ws.onmessage = function (Event)
        {
            var Data = JSON.parse (Event.data) [0];

            if (Data.u != undefined && Data.c)
                window.ROOMS = Data.u;
        };
    }

    function GetCurrentData ( )
    {
        var Data = new Object ( );
        var Chat = $('#chat > ul > li');

        Data.Room = MPP.client.channel;
        Data.Chat = new Object ( );
        Data.Chat.Count = '≥' + Chat.length.toString ( );
        Data.Chat.Last = '"(' + Chat.last ( ).find ('.name').text ( ).replace (':', '') + ') ' + Chat.last ( ).find ('.message').html ( ) + '"';

        return Data;
    }

    function GetCurrentRooms ( )
    {
        MPP.client.ws.send ('[{"m":"+ls"}]');
        MPP.client.ws.send ('[{"m":"-ls"}]');

        return window.ROOMS;
    }

    function GetCurrentUsers ( )
    {
        return $.map (MPP.client.ppl, function (Value, Index) { return [Value]; });
    }

    // Черный список

    var Blacklist = [ 'жaбa', 'жaбкa', 'zhaba' ];

    function IsInBlackList (Name)
    {
        if (Blacklist.indexOf (Name.toLowerCase ( ).replace (/а/g, 'a')) != -1)
            return true;

        return false;
    }

    // Загрузка компонентов формы

	var test_mode = (window.location.hash && window.location.hash.match(/^(?:#.+)*#test(?:#.+)*$/i));
	var gSeeOwnCursor = (window.location.hash && window.location.hash.match(/^(?:#.+)*#seeowncursor(?:#.+)*$/i));
	var gMidiOutTest = (window.location.hash && window.location.hash.match(/^(?:#.+)*#midiout(?:#.+)*$/i));

    function Sleep (Time)
    {
        return new Promise (Resolve => setTimeout (Resolve, Time));
    }

	if (!Array.prototype.indexOf) {
		Array.prototype.indexOf = function(elt /*, from*/) {
			var len = this.length >>> 0;
			var from = Number(arguments[1]) || 0;
			from = (from < 0) ? Math.ceil(from) : Math.floor(from);
			if (from < 0) from += len;
			for (; from < len; from++) {
				if (from in this && this[from] === elt) return from;
			}
			return -1;
		};
	}

	window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame
		|| window.webkitRequestAnimationFrame || window.msRequestAnimationFrame
		|| function (cb) { setTimeout(cb, 1000 / 30); };




	var gSoundPath = "/mp3/";
	var gSoundExt = ".wav.mp3";

    /*

	// Yoshify.
	if ((window.location.hash && window.location.hash.match(/^(?:#.+)*#Piano_Great_and_Soft(?:#.+)*$/i))) {
		gSoundPath = "https://dl.dropboxusercontent.com/u/216104606/GreatAndSoftPiano/";
		gSoundExt = ".mp3";
	}


	if ((window.location.hash && window.location.hash.match(/^(?:#.+)*#Piano_Loud_and_Proud(?:#.+)*$/i))) {
		gSoundPath = "https://dl.dropboxusercontent.com/u/216104606/LoudAndProudPiano/";
		gSoundExt = ".mp3";
	}

	// electrashave
	if((window.location.hash && window.location.hash.match(/^(?:#.+)*#NewPiano(?:#.+)*$/i))) {
		gSoundPath = "https://dl.dropboxusercontent.com/u/258840068/CustomSounds/NewPiano/";
		gSoundExt = ".mp3";
	}

	// Ethan Walsh
	if((window.location.hash && window.location.hash.match(/^(?:#.+)*#HDPiano(?:#.+)*$/i))) {
		gSoundPath = "https://dl.dropboxusercontent.com/u/258840068/CustomSounds/HDPiano/";
		gSoundExt = ".wav";
	}
	if((window.location.hash && window.location.hash.match(/^(?:#.+)*#Harpischord(?:#.+)*$/i))) {
		gSoundPath = "https://dl.dropboxusercontent.com/u/24213061/Harpischord/";
		gSoundExt = ".wav";
	}
	if((window.location.hash && window.location.hash.match(/^(?:#.+)*#ClearPiano(?:#.+)*$/i))) {
		gSoundPath = "https://dl.dropboxusercontent.com/u/24213061/ClearPiano/";
		gSoundExt = ".wav";
	}

	// Alexander Holmfjeld
	if((window.location.hash && window.location.hash.match(/^(?:#.+)*#Klaver(?:#.+)*$/i))) {
		gSoundPath = "https://dl.dropboxusercontent.com/u/70730519/Klaver/";
		gSoundExt = ".wav";
	}

    */





	var DEFAULT_VELOCITY = 0.5;
	var TIMING_TARGET = 1000;






// Utility

////////////////////////////////////////////////////////////////



var Rect = function(x, y, w, h) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.x2 = x + w;
	this.y2 = y + h;
};
Rect.prototype.contains = function(x, y) {
	return (x >= this.x && x <= this.x2 && y >= this.y && y <= this.y2);
};



// AudioEngine classes

////////////////////////////////////////////////////////////////

	var AudioEngine = function() {
	};

	AudioEngine.prototype.init = function(cb) {
		this.volume = 0.6;
		this.sounds = {};
		return this;
	};

	AudioEngine.prototype.load = function(id, url, cb) {
	};

	AudioEngine.prototype.play = function() {
	};

	AudioEngine.prototype.stop = function() {
	};

	AudioEngine.prototype.setVolume = function(vol) {
		this.volume = vol;
	};


	AudioEngineWeb = function() {
		this.threshold = 10;
		this.worker = new Worker("/workerTimer.js"); //must be same origin
		var self = this;
		this.worker.onmessage = function(event)
			{
				if(event.data.args)
				if(event.data.args.action==0)
				{
					self.actualPlay(event.data.args.id, event.data.args.vol, event.data.args.time, event.data.args.part_id);
				}
				else
				{
					self.actualStop(event.data.args.id, event.data.args.time, event.data.args.part_id);
				}
			}
	};

	AudioEngineWeb.prototype = new AudioEngine();

	AudioEngineWeb.prototype.init = function(cb) {
		AudioEngine.prototype.init.call(this);

		this.context = new AudioContext();

		this.masterGain = this.context.createGain();
		this.masterGain.connect(this.context.destination);
		this.masterGain.gain.value = this.volume;

		this.limiterNode = this.context.createDynamicsCompressor();
		this.limiterNode.threshold.value = -10;
		this.limiterNode.knee.value = 0;
		this.limiterNode.ratio.value = 20;
		this.limiterNode.attack.value = 0;
		this.limiterNode.release.value = 0.1;
		this.limiterNode.connect(this.masterGain);

		// for synth mix
		this.pianoGain = this.context.createGain();
		this.pianoGain.gain.value = 0.5;
		this.pianoGain.connect(this.limiterNode);
		this.synthGain = this.context.createGain();
		this.synthGain.gain.value = 0.5;
		this.synthGain.connect(this.limiterNode);

		this.playings = {};

		if(cb) setTimeout(cb, 0);
		return this;
	};

	AudioEngineWeb.prototype.load = function (Id, Url, Cb)
    {
		var Audio = this;
		var Request = new XMLHttpRequest ( );

		Request.open ("GET", Url);
		Request.responseType = "arraybuffer";

		Request.addEventListener ("readystatechange", function (Event)
        {
			if (Request.readyState !== 4) return;

			try
            {
				Audio.context.decodeAudioData (Request.response, function (Buffer) { Audio.sounds [Id] = Buffer; if (Cb) Cb ( ); });
			}
            catch (Exception)
            {
				new Notification ({ id: 'AudioError', title: Language ['AudioError Title'], text: Language ['AudioError Description'] + '<br/>' + Request.status,
					target: "#piano", duration: 10000 });
			}
		});

		Request.send ( );
	};

	AudioEngineWeb.prototype.actualPlay = function(id, vol, time, part_id) { //the old play(), but with time insted of delay_ms.
		if(!this.sounds.hasOwnProperty(id)) return;
		var source = this.context.createBufferSource();
		source.buffer = this.sounds[id];
		var gain = this.context.createGain();
		gain.gain.value = vol;
		source.connect(gain);
		gain.connect(this.pianoGain);
		source.start(time);
		// Patch from ste-art remedies stuttering under heavy load
		if(this.playings[id]) {
			var playing = this.playings[id];
			playing.gain.gain.setValueAtTime(playing.gain.gain.value, time);
			playing.gain.gain.linearRampToValueAtTime(0.0, time + 0.2);
			playing.source.stop(time + 0.21);
		}
		this.playings[id] = {"source": source, "gain": gain, "part_id": part_id};
	}

	AudioEngineWeb.prototype.play = function(id, vol, delay_ms, part_id)
	{
		if(!this.sounds.hasOwnProperty(id)) return;
		var time = this.context.currentTime + (delay_ms / 1000); //calculate time on note receive.
		var delay = delay_ms - this.threshold;
		if(delay<=0) this.actualPlay(id, vol, time, part_id);
		else {
			this.worker.postMessage({delay:delay,args:{action:0/*play*/,id:id, vol:vol, time:time, part_id:part_id}}); // but start scheduling right before play.
		}
	}

	AudioEngineWeb.prototype.actualStop = function(id, time, part_id) {
		if(this.playings.hasOwnProperty(id) && this.playings[id] && this.playings[id].part_id === part_id) {
			var gain = this.playings[id].gain.gain;
			gain.setValueAtTime(gain.value, time);
			gain.linearRampToValueAtTime(gain.value * 0.1, time + 0.16);
			gain.linearRampToValueAtTime(0.0, time + 0.4);
			this.playings[id].source.stop(time + 0.41);


			if(this.playings[id].voice) {
				this.playings[id].voice.stop(time);
			}

			this.playings[id] = null;
		}
	};

	AudioEngineWeb.prototype.stop = function(id, delay_ms, part_id) {
			var time = this.context.currentTime + (delay_ms / 1000);
			var delay = delay_ms - this.threshold;
			if(delay<=0) this.actualStop(id, time, part_id);
			else {
				this.worker.postMessage({delay:delay,args:{action:1/*stop*/, id:id, time:time, part_id:part_id}});
			}
	};

	AudioEngineWeb.prototype.setVolume = function(vol) {
		AudioEngine.prototype.setVolume.call(this, vol);
		this.masterGain.gain.value = this.volume;
	};















// VolumeSlider inst

////////////////////////////////////////////////////////////////

	var VolumeSlider = function(ele, cb) {
		this.rootElement = ele;
		this.cb = cb;
		var range = document.createElement("input");
		try {
			range.type = "range";
		} catch(e) {
			// hello, IE9
		}
		if(range.min !== undefined) {
			this.range = range;
			this.rootElement.appendChild(range);
			range.className = "advanced-slider";
			range.min = "0.0";
			range.max = "1.0";
			range.step = "0.01";
			$(range).on("change", function(evt) {
				cb(range.value);
			});
		} else {
			if(window.console) console.log("warn: no slider");
			// todo
		}
	};

	VolumeSlider.prototype.set = function(v) {
		if(this.range !== undefined) {
			this.range.value = v;
		} else {
			// todo
		}
	};



















// Renderer classes

////////////////////////////////////////////////////////////////

	var Renderer = function() {
	};

	Renderer.prototype.init = function(piano) {
		this.piano = piano;
		this.resize();
		return this;
	};

	Renderer.prototype.resize = function(width, height) {
		if(typeof width == "undefined") width = $(this.piano.rootElement).width();
		if(typeof height == "undefined") height = Math.floor(width * 0.2);
		$(this.piano.rootElement).css({"height": height + "px", marginTop: Math.floor($(window).height() / 2 - height / 2) + "px"});
		this.width = width;
		this.height = height;
	};

	Renderer.prototype.visualize = function(key, color) {
	};




	var DOMRenderer = function() {
		Renderer.call(this);
	};

	DOMRenderer.prototype = new Renderer();

	DOMRenderer.prototype.init = function(piano) {
		// create keys in dom
		for(var i in piano.keys) {
			if(!piano.keys.hasOwnProperty(i)) continue;
			var key = piano.keys[i];
			var ele = document.createElement("div");
			key.domElement = ele;
			piano.rootElement.appendChild(ele);
			// "key sharp cs cs2"
			ele.note = key.note;
			ele.id = key.note;
			ele.className = "key " + (key.sharp ? "sharp " : " ") + key.baseNote + " " + key.note + " loading";
			var table = $('<table width="100%" height="100%" style="pointer-events:none"></table>');
			var td = $('<td valign="bottom"></td>');
			table.append(td);
			td.valign = "bottom";
			$(ele).append(table);
		}
		// add event listeners
		var mouse_down = false;
		$(piano.rootElement).mousedown(function(event) {
			// todo: IE10 doesn't support the pointer-events css rule on the "blips"
			var ele = event.target;
			if($(ele).hasClass("key") && piano.keys.hasOwnProperty(ele.note)) {
				var key = piano.keys[ele.note];
				press(key.note);
				mouse_down = true;
				event.stopPropagation();
			};
			//event.preventDefault();
		});
		piano.rootElement.addEventListener("touchstart", function(event) {
			for(var i in event.changedTouches) {
				var ele = event.changedTouches[i].target;
				if($(ele).hasClass("key") && piano.keys.hasOwnProperty(ele.note)) {
					var key = piano.keys[ele.note];
					press(key.note);
					mouse_down = true;
					event.stopPropagation();
				}
			}
			//event.preventDefault();
		}, false);
		$(window).mouseup(function(event) {
			mouse_down = false;
		});
		/*$(piano.rootElement).mouseover(function(event) {
			if(!mouse_down) return;
			var ele = event.target;
			if($(ele).hasClass("key") && piano.keys.hasOwnProperty(ele.note)) {
				var key = piano.keys[ele.note];
				press(key.note);
			}
		});*/

		Renderer.prototype.init.call(this, piano);
		return this;
	};

	DOMRenderer.prototype.resize = function(width, height) {
		Renderer.prototype.resize.call(this, width, height);
	};

	DOMRenderer.prototype.visualize = function(key, color) {
		var k = $(key.domElement);
		k.addClass("play");
		setTimeout(function(){
			k.removeClass("play");
		}, 100);
		// "blips"
		var d = $('<div style="width:100%;height:10%;margin:0;padding:0">&nbsp;</div>');
		d.css("background", color);
		k.find("td").append(d);
		d.fadeOut(1000, function(){
			d.remove();
		});
	};




	var CanvasRenderer = function() {
		Renderer.call(this);
	};

	CanvasRenderer.prototype = new Renderer();

	CanvasRenderer.prototype.init = function(piano) {
		this.canvas = document.createElement("canvas");
		this.ctx = this.canvas.getContext("2d");
		piano.rootElement.appendChild(this.canvas);

		Renderer.prototype.init.call(this, piano); // calls resize()

		// create render loop
		var self = this;
		var render = function() {
			self.redraw();
			requestAnimationFrame(render);
		};
		requestAnimationFrame(render);

		// add event listeners
		var mouse_down = false;
		var last_key = null;
		$(piano.rootElement).mousedown(function(event) {
			mouse_down = true;
			//event.stopPropagation();
			event.preventDefault();

			var pos = CanvasRenderer.translateMouseEvent(event);
			var hit = self.getHit(pos.x, pos.y);
			if(hit) {
				press(hit.key.note, hit.v);
				last_key = hit.key;
			}
		});
		piano.rootElement.addEventListener("touchstart", function(event) {
			mouse_down = true;
			//event.stopPropagation();
			event.preventDefault();
			for(var i in event.changedTouches) {
				var pos = CanvasRenderer.translateMouseEvent(event.changedTouches[i]);
				var hit = self.getHit(pos.x, pos.y);
				if(hit) {
					press(hit.key.note, hit.v);
					last_key = hit.key;
				}
			}
		}, false);
		$(window).mouseup(function(event) {
			if(last_key) {
				release(last_key.note);
			}
			mouse_down = false;
			last_key = null;
		});

		return this;
	};

	CanvasRenderer.prototype.resize = function(width, height) {
		Renderer.prototype.resize.call(this, width, height);
		if(this.width < 52 * 2) this.width = 52 * 2;
		if(this.height < this.width * 0.2) this.height = Math.floor(this.width * 0.2);
		this.canvas.width = this.width;
		this.canvas.height = this.height;

		// calculate key sizes
		this.whiteKeyWidth = Math.floor(this.width / 52);
		this.whiteKeyHeight = Math.floor(this.height * 0.9);
		this.blackKeyWidth = Math.floor(this.whiteKeyWidth * 0.75);
		this.blackKeyHeight = Math.floor(this.height * 0.5);

		this.blackKeyOffset = Math.floor(this.whiteKeyWidth - (this.blackKeyWidth / 2));
		this.keyMovement = Math.floor(this.whiteKeyHeight * 0.015);

		this.whiteBlipWidth = Math.floor(this.whiteKeyWidth * 0.7);
		this.whiteBlipHeight = Math.floor(this.whiteBlipWidth * 0.8);
		this.whiteBlipX = Math.floor((this.whiteKeyWidth - this.whiteBlipWidth) / 2);
		this.whiteBlipY = Math.floor(this.whiteKeyHeight - this.whiteBlipHeight * 1.2);
		this.blackBlipWidth = Math.floor(this.blackKeyWidth * 0.7);
		this.blackBlipHeight = Math.floor(this.blackBlipWidth * 0.8);
		this.blackBlipY = Math.floor(this.blackKeyHeight - this.blackBlipHeight * 1.2);
		this.blackBlipX = Math.floor((this.blackKeyWidth - this.blackBlipWidth) / 2);

		// prerender white key
		this.whiteKeyRender = document.createElement("canvas");
		this.whiteKeyRender.width = this.whiteKeyWidth;
		this.whiteKeyRender.height = this.height + 10;
		var ctx = this.whiteKeyRender.getContext("2d");
		if(ctx.createLinearGradient) {
			var gradient = ctx.createLinearGradient(0, 0, 0, this.whiteKeyHeight);
			gradient.addColorStop(0, "#dedede");
			gradient.addColorStop(0.8, "#f3f3f3");
			gradient.addColorStop(1, "#cbcbcb");
			ctx.fillStyle = gradient;
		} else {
			ctx.fillStyle = "#fff";
		}
		ctx.strokeStyle = "#252525";
		ctx.lineJoin = "round";
		ctx.lineCap = "round";
		ctx.lineWidth = 5;
		ctx.strokeRect(ctx.lineWidth / 2, ctx.lineWidth / 2, this.whiteKeyWidth - ctx.lineWidth, this.whiteKeyHeight - ctx.lineWidth);
		ctx.lineWidth = 2.5;
		ctx.fillRect(ctx.lineWidth / 2, ctx.lineWidth / 2, this.whiteKeyWidth - ctx.lineWidth, this.whiteKeyHeight - ctx.lineWidth);

		// prerender black key
		this.blackKeyRender = document.createElement("canvas");
		this.blackKeyRender.width = this.blackKeyWidth + 10;
		this.blackKeyRender.height = this.blackKeyHeight + 10;
		var ctx = this.blackKeyRender.getContext("2d");
		if(ctx.createLinearGradient) {
			var gradient = ctx.createLinearGradient(0, 0, 0, this.blackKeyHeight);
			gradient.addColorStop(0, "#000");
			gradient.addColorStop(0.7, "#111");
			gradient.addColorStop(0.9, "#222")
			gradient.addColorStop(1, "#414141");
			ctx.fillStyle = gradient;
		} else {
			ctx.fillStyle = "#000";
		}
		ctx.strokeStyle = "#222";
		ctx.lineJoin = "round";
		ctx.lineCap = "round";
		ctx.lineWidth = 5;
		ctx.strokeRect(ctx.lineWidth / 2, ctx.lineWidth / 2, this.blackKeyWidth - ctx.lineWidth, this.blackKeyHeight - ctx.lineWidth);
		ctx.lineWidth = 2.5;
		ctx.fillRect(ctx.lineWidth / 2, ctx.lineWidth / 2, this.blackKeyWidth - ctx.lineWidth, this.blackKeyHeight - ctx.lineWidth);

		// prerender shadows
		this.shadowRender = [];
		var y = -this.canvas.height * 2;
		for(var j = 0; j < 2; j++) {
			var canvas = document.createElement("canvas");
			this.shadowRender[j] = canvas;
			canvas.width = this.canvas.width;
			canvas.height = this.canvas.height;
			var ctx = canvas.getContext("2d");
			var sharp = j ? true : false;
			ctx.lineJoin = "round";
			ctx.lineCap = "round";
			ctx.lineWidth = 1;
			ctx.shadowColor = "transparent";
			ctx.shadowBlur = this.keyMovement * 3;
			ctx.shadowOffsetY = -y + this.keyMovement;
			if(sharp) {
				ctx.shadowOffsetX = this.keyMovement;
			} else {
				ctx.shadowOffsetX = 0;
				ctx.shadowOffsetY = -y + this.keyMovement;
			}
			for(var i in this.piano.keys) {
				if(!this.piano.keys.hasOwnProperty(i)) continue;
				var key = this.piano.keys[i];
				if(key.sharp != sharp) continue;

				if(key.sharp) {
					ctx.fillRect(this.blackKeyOffset + this.whiteKeyWidth * key.spatial + ctx.lineWidth / 2,
						y + ctx.lineWidth / 2,
						this.blackKeyWidth - ctx.lineWidth, this.blackKeyHeight - ctx.lineWidth);
				} else {
					ctx.fillRect(this.whiteKeyWidth * key.spatial + ctx.lineWidth / 2,
						y + ctx.lineWidth / 2,
						this.whiteKeyWidth - ctx.lineWidth, this.whiteKeyHeight - ctx.lineWidth);
				}
			}
		}

		// update key rects
		for(var i in this.piano.keys) {
			if(!this.piano.keys.hasOwnProperty(i)) continue;
			var key = this.piano.keys[i];
			if(key.sharp) {
				key.rect = new Rect(this.blackKeyOffset + this.whiteKeyWidth * key.spatial, 0,
					this.blackKeyWidth, this.blackKeyHeight);
			} else {
				key.rect = new Rect(this.whiteKeyWidth * key.spatial, 0,
					this.whiteKeyWidth, this.whiteKeyHeight);
			}
		}
	};

	CanvasRenderer.prototype.visualize = function(key, color) {
		key.timePlayed = Date.now();
		key.blips.push({"time": key.timePlayed, "color": color});
	};

	CanvasRenderer.prototype.redraw = function() {
		var now = Date.now();
		var timeLoadedEnd = now - 1000;
		var timePlayedEnd = now - 100;
		var timeBlipEnd = now - 1000;

		this.ctx.save();
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		// draw all keys
		for(var j = 0; j < 2; j++) {
			this.ctx.globalAlpha = 1.0;
			this.ctx.drawImage(this.shadowRender[j], 0, 0);
			var sharp = j ? true : false;
			for(var i in this.piano.keys) {
				if(!this.piano.keys.hasOwnProperty(i)) continue;
				var key = this.piano.keys[i];
				if(key.sharp != sharp) continue;

				if(!key.loaded) {
					this.ctx.globalAlpha = 0.2;
				} else if(key.timeLoaded > timeLoadedEnd) {
					this.ctx.globalAlpha = ((now - key.timeLoaded) / 1000) * 0.8 + 0.2;
				} else {
					this.ctx.globalAlpha = 1.0;
				}
				var y = 0;
				if(key.timePlayed > timePlayedEnd) {
					y = Math.floor(this.keyMovement - (((now - key.timePlayed) / 100) * this.keyMovement));
				}
				var x = Math.floor(key.sharp ? this.blackKeyOffset + this.whiteKeyWidth * key.spatial
					: this.whiteKeyWidth * key.spatial);
				var image = key.sharp ? this.blackKeyRender : this.whiteKeyRender;
				this.ctx.drawImage(image, x, y);

				// render blips
				if(key.blips.length) {
					var alpha = this.ctx.globalAlpha;
					var w, h;
					if(key.sharp) {
						x += this.blackBlipX;
						y = this.blackBlipY;
						w = this.blackBlipWidth;
						h = this.blackBlipHeight;
					} else {
						x += this.whiteBlipX;
						y = this.whiteBlipY;
						w = this.whiteBlipWidth;
						h = this.whiteBlipHeight;
					}
					for(var b = 0; b < key.blips.length; b++) {
						var blip = key.blips[b];
						if(blip.time > timeBlipEnd) {
							this.ctx.fillStyle = blip.color;
							this.ctx.globalAlpha = alpha - ((now - blip.time) / 1000);
							this.ctx.fillRect(x - 1, y, w + 2, h + 1);
							this.ctx.globalAlpha = alpha - ((now - blip.time) / 1000);
							this.ctx.fillRect(x - 1, y, w + 2, h + 1);
						} else {
							key.blips.splice(b, 1);
							--b;
						}
						y -= Math.floor(h * 1.1);
					}
				}
			}
		}
		this.ctx.restore();
	};

	CanvasRenderer.prototype.getHit = function(x, y) {
		for(var j = 0; j < 2; j++) {
			var sharp = j ? false : true; // black keys first
			for(var i in this.piano.keys) {
				if(!this.piano.keys.hasOwnProperty(i)) continue;
				var key = this.piano.keys[i];
				if(key.sharp != sharp) continue;
				if(key.rect.contains(x, y)) {
					var v = y / (key.sharp ? this.blackKeyHeight : this.whiteKeyHeight);
					v += 0.25;
					v *= DEFAULT_VELOCITY;
					if(v > 1.0) v = 1.0;
					return {"key": key, "v": v};
				}
			}
		}
		return null;
	};


	CanvasRenderer.isSupported = function() {
		var canvas = document.createElement("canvas");
		return !!(canvas.getContext && canvas.getContext("2d"));
	};

	CanvasRenderer.translateMouseEvent = function(evt) {
		var element = evt.target;
		var offx = 0;
		var offy = 0;
		do {
			if(!element) break; // wtf, wtf?
			offx += element.offsetLeft;
			offy += element.offsetTop;
		} while(element = element.offsetParent);
		return {
			x: evt.pageX - offx,
			y: evt.pageY - offy
		}
	};












// Pianoctor

////////////////////////////////////////////////////////////////

	var PianoKey = function(note, octave) {
		this.note = note + octave;
		this.baseNote = note;
		this.octave = octave;
		this.sharp = note.indexOf("s") != -1;
		this.loaded = false;
		this.timeLoaded = 0;
		this.domElement = null;
		this.timePlayed = 0;
		this.blips = [];
	};

	var Piano = function(rootElement) {

		var piano = this;
		piano.rootElement = rootElement;
		piano.keys = {};

		var white_spatial = 0;
		var black_spatial = 0;
		var black_it = 0;
		var black_lut = [2, 1, 2, 1, 1];
		var addKey = function(note, octave) {
			var key = new PianoKey(note, octave);
			piano.keys[key.note] = key;
			if(key.sharp) {
				key.spatial = black_spatial;
				black_spatial += black_lut[black_it % 5];
				++black_it;
			} else {
				key.spatial = white_spatial;
				++white_spatial;
			}
		}
		if(test_mode) {
			addKey("c", 2);
		} else {
			addKey("a", -1);
			addKey("as", -1);
			addKey("b", -1);
			var notes = "c cs d ds e f fs g gs a as b".split(" ");
			for(var oct = 0; oct < 7; oct++) {
				for(var i in notes) {
					addKey(notes[i], oct);
				}
			}
			addKey("c", 7);
		}


		var render_engine = CanvasRenderer.isSupported() ? CanvasRenderer : DOMRenderer;
		this.renderer = new render_engine().init(this);

		window.addEventListener("resize", function() {
			piano.renderer.resize();
		});


		window.AudioContext = window.AudioContext || window.webkitAudioContext || undefined;
		var audio_engine = AudioEngineWeb;

		this.audio = new audio_engine().init(function() {
			for(var i in piano.keys) {
				if(!piano.keys.hasOwnProperty(i)) continue;
				(function() {
					var key = piano.keys[i];
					piano.audio.load(key.note, gSoundPath + key.note + gSoundExt, function() {
						key.loaded = true;
						key.timeLoaded = Date.now();
						if(key.domElement) // todo: move this to renderer somehow
							$(key.domElement).removeClass("loading");
					});
				})();
			}
		});
	};

	Piano.prototype.play = function(note, vol, participant, delay_ms) {
		if(!this.keys.hasOwnProperty(note)) return;
		var key = this.keys[note];
		if(key.loaded) this.audio.play(key.note, vol, delay_ms, participant.id);
		if(typeof gMidiOutTest === "function") gMidiOutTest(key.note, vol * 100, delay_ms);
		var self = this;
		var jq_namediv = $(typeof participant == "undefined" ? null : participant.nameDiv);
		if(jq_namediv) {
			setTimeout(function() {
				self.renderer.visualize(key, typeof participant == "undefined" ? "yellow" : (participant.color || "#777"));
				jq_namediv.addClass("play");
				setTimeout(function() {
					jq_namediv.removeClass("play");
				}, 30);
			}, delay_ms);
		}
	};

	Piano.prototype.stop = function(note, participant, delay_ms) {
		if(!this.keys.hasOwnProperty(note)) return;
		var key = this.keys[note];
		if(key.loaded) this.audio.stop(key.note, delay_ms, participant.id);
		if(typeof gMidiOutTest === "function") gMidiOutTest(key.note, 0, delay_ms);
	};

	var gPiano = new Piano(document.getElementById("piano"));







	var gAutoSustain = false; //!(window.location.hash && window.location.hash.match(/^(?:#.+)*#sustain(?:#.+)*$/));
	var gSustain = false;

	var gHeldNotes = {};
	var gSustainedNotes = {};


	function press(id, vol) {
		if(!gClient.preventsPlaying() && gNoteQuota.spend(1)) {
			gHeldNotes[id] = true;
			gSustainedNotes[id] = true;
			gPiano.play(id, vol !== undefined ? $('input[class=power-slider]').val() * vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), 0);
			gClient.startNote(id, $('input[class=power-slider]').val() * vol);
		}
	}

	function release(id) {
		if(gHeldNotes[id]) {
			gHeldNotes[id] = false;
			if(gAutoSustain || gSustain) {
				gSustainedNotes[id] = true;
			} else {
				if(gNoteQuota.spend(1)) {
					gPiano.stop(id, gClient.getOwnParticipant(), 0);
					gClient.stopNote(id);
					gSustainedNotes[id] = false;
				}
			}
		}
	}

	function pressSustain() {
		gSustain = true;
	}

	function releaseSustain() {
		gSustain = false;
		if(!gAutoSustain) {
			for(var id in gSustainedNotes) {
				if(gSustainedNotes.hasOwnProperty(id) && gSustainedNotes[id] && !gHeldNotes[id]) {
					gSustainedNotes[id] = false;
					if(gNoteQuota.spend(1)) {
						gPiano.stop(id, gClient.getOwnParticipant(), 0);
						gClient.stopNote(id);
					}
				}
			}
		}
	}









// internet science

////////////////////////////////////////////////////////////////

	var channel_id = decodeURIComponent(window.location.pathname);
	if(channel_id.substr(0, 1) == "/") channel_id = channel_id.substr(1);
	if(channel_id == "" || channel_id == "lobby") channel_id = "lolwutsecretlobbybackdoor";

	var wssport = window.location.hostname == "www.multiplayerpiano.com" ? 443 : 8080;
	var gClient = new Client("ws://" + window.location.hostname + ":" + wssport);
	gClient.setChannel(channel_id);
	gClient.start();

	// Setting status

	(function ( )
     {
		gClient.on ("status", function (status)
        {
			$("#status").text ('...');
		});

		gClient.on ("count", function (count)
        {
			if (count > 0)
            {
				$("#status").html ('<span class = "number">' + count + '</span> ');
				document.title = "Piano (" + count + ")";
			}
            else
            {
				document.title = "Multiplayer Piano";
			}
		});
	}) ( );

	// Handle changes to participants
	(function() {
		gClient.on("participant added", function(part) {

			part.displayX = 150;
			part.displayY = 50;

			// add nameDiv
			var div = document.createElement("div");
			div.className = "name";
			div.participantId = part.id;
			div.textContent = part.name || "";
			div.style.backgroundColor = part.color || "#777";

            if (IsInBlackList (part.name) && gClient.isOwner ( ))
                gClient.sendArray ([{ m: 'kickban', _id: part._id, ms: 3600000 }]);

			if(gClient.participantId === part.id) {
				$(div).addClass('me');
			}
			if(gClient.channel && gClient.channel.crown && gClient.channel.crown.participantId === part.id) {
				$(div).addClass("owner");
			}
			if(gPianoMutes.indexOf(part._id) !== -1) {
				$(part.nameDiv).addClass("muted-notes");
			}
			if(gChatMutes.indexOf(part._id) !== -1) {
				$(part.nameDiv).addClass("muted-chat");
			}
			div.style.display = "none";
			part.nameDiv = $("#names")[0].appendChild(div);
			$(part.nameDiv).fadeIn(2000);

			// sort names
			var arr = $("#names .name");
			arr.sort(function(a, b) {
				a = a.style.backgroundColor; // todo: sort based on user id instead
				b = b.style.backgroundColor;
				if (a > b) return 1;
				else if (a < b) return -1;
				else return 0;
			});
			$("#names").html(arr);

			// add cursorDiv
			if(gClient.participantId !== part.id || gSeeOwnCursor) {
				var div = document.createElement("div");
				div.className = "cursor";
				div.style.display = "none";
				part.cursorDiv = $("#cursors")[0].appendChild(div);
				$(part.cursorDiv).fadeIn(2000);

				var div = document.createElement("div");
				div.className = "name";
				div.style.backgroundColor = part.color || "#777";
				div.textContent = part.name || "";
				part.cursorDiv.appendChild(div);

			} else {
				part.cursorDiv = undefined;
			}
		});
		gClient.on("participant removed", function(part) {
			// remove nameDiv
			var nd = $(part.nameDiv);
			var cd = $(part.cursorDiv);
			cd.fadeOut(2000);
			nd.fadeOut(2000, function() {
				nd.remove();
				cd.remove();
				part.nameDiv = undefined;
				part.cursorDiv = undefined;
			});
		});
		gClient.on("participant update", function(part) {

            if (IsInBlackList (part.name) && gClient.isOwner ( ))
                gClient.sendArray ([{ m: 'kickban', _id: part._id, ms: 3600000 }]);

			var name = part.name || "";
			var color = part.color || "#777";
			part.nameDiv.style.backgroundColor = color;
			part.nameDiv.textContent = name;
			$(part.cursorDiv)
			.find(".name")
			.text(name)
			.css("background-color", color);
		});
		gClient.on("ch", function(msg) {
			for(var id in gClient.ppl) {
				if(gClient.ppl.hasOwnProperty(id)) {
					var part = gClient.ppl[id];
					if(part.id === gClient.participantId) {
						$(part.nameDiv).addClass("me");
					} else {
						$(part.nameDiv).removeClass("me");
					}
					if(msg.ch.crown && msg.ch.crown.participantId === part.id) {
						$(part.nameDiv).addClass("owner");
						$(part.cursorDiv).addClass("owner");
					} else {
						$(part.nameDiv).removeClass("owner");
						$(part.cursorDiv).removeClass("owner");
					}
					if(gPianoMutes.indexOf(part._id) !== -1) {
						$(part.nameDiv).addClass("muted-notes");
					} else {
						$(part.nameDiv).removeClass("muted-notes");
					}
					if(gChatMutes.indexOf(part._id) !== -1) {
						$(part.nameDiv).addClass("muted-chat");
					} else {
						$(part.nameDiv).removeClass("muted-chat");
					}
				}
			}
		});
	})();


	// Handle changes to crown
	(function() {
		var jqcrown = $('<div id="crown"></div>').appendTo(document.body).hide();
		var jqcountdown = $('<span></span>').appendTo(jqcrown);
		var countdown_interval;
		jqcrown.click(function() {
			gClient.sendArray([{m: "chown", id: gClient.participantId}]);
		});
		gClient.on("ch", function(msg) {
			if(msg.ch.crown) {
				var crown = msg.ch.crown;
				if(!crown.participantId || !gClient.ppl[crown.participantId]) {
					var land_time = crown.time + 2000 - gClient.serverTimeOffset;
					var avail_time = crown.time + 15000 - gClient.serverTimeOffset;
					jqcountdown.text("");
					jqcrown.show();
					if(land_time - Date.now() <= 0) {
						jqcrown.css({"left": crown.endPos.x + "%", "top": crown.endPos.y + "%"});
					} else {
						jqcrown.css({"left": crown.startPos.x + "%", "top": crown.startPos.y + "%"});
						jqcrown.addClass("spin");
						jqcrown.animate({"left": crown.endPos.x + "%", "top": crown.endPos.y + "%"}, 2000, "linear", function() {
							jqcrown.removeClass("spin");
						});
					}
					clearInterval(countdown_interval);
					countdown_interval = setInterval(function() {
						var time = Date.now();
						if(time >= land_time) {
							var ms = avail_time - time;
							if(ms > 0) {
								jqcountdown.text(Math.ceil(ms / 1000) + "s");
							} else {
								jqcountdown.text("");
								clearInterval(countdown_interval);
							}
						}
					}, 1000);
				} else {
					jqcrown.hide();
				}
			} else {
				jqcrown.hide();
			}
		});
		gClient.on("disconnect", function() {
			jqcrown.fadeOut(2000);
		});
	})();


	// Playing notes
	gClient.on("n", function(msg) {
		var t = msg.t - gClient.serverTimeOffset + TIMING_TARGET - Date.now();
		var participant = gClient.findParticipantById(msg.p);
		if(gPianoMutes.indexOf(participant._id) !== -1)
			return;
		for(var i = 0; i < msg.n.length; i++) {
			var note = msg.n[i];
			var ms = t + (note.d || 0);
			if(ms < 0) {
				ms = 0;
			}
			else if(ms > 10000) continue;
			if(note.s) {
				gPiano.stop(note.n, participant, ms);
			} else {
				var vel = (typeof note.v !== "undefined")? parseFloat(note.v) : DEFAULT_VELOCITY;
				if(vel < 0) vel = 0; else if (vel > 1) vel = 1;
				gPiano.play(note.n, vel, participant, ms);
			}
		}
	});

	// Send cursor updates
	var mx = 0, last_mx = -10, my = 0, last_my = -10;
	setInterval(function() {
		if(Math.abs(mx - last_mx) > 0.1 || Math.abs(my - last_my) > 0.1) {
			last_mx = mx;
			last_my = my;
			gClient.sendArray([{m: "m", x: mx, y: my}]);
			var part = gClient.getOwnParticipant();
			if(part) {
				part.x = mx;
				part.y = my;
			}
		}
	}, 50);
	$(document).mousemove(function(event) {
		mx = ((event.pageX / $(window).width()) * 100).toFixed(2);
		my = ((event.pageY / $(window).height()) * 100).toFixed(2);
	});

	// Animate cursors
	setInterval(function() {
		for(var id in gClient.ppl) {
			if(!gClient.ppl.hasOwnProperty(id)) continue;
			var part = gClient.ppl[id];
			if(part.cursorDiv && (Math.abs(part.x - part.displayX) > 0.1 || Math.abs(part.y - part.displayY) > 0.1)) {
				part.displayX += (part.x - part.displayX) * 0.75;
				part.displayY += (part.y - part.displayY) * 0.75;
				part.cursorDiv.style.left = part.displayX + "%";
				part.cursorDiv.style.top = part.displayY + "%";
			}
		}
	}, 50);


	// Room settings button
	(function() {
		gClient.on("ch", function(msg) {
			if(gClient.isOwner()) {
				$("#room-settings-btn").show();
			} else {
				$("#room-settings-btn").hide();
			}
		});
		$("#room-settings-btn").click(function(evt) {
			if(gClient.channel && gClient.isOwner()) {
				var settings = gClient.channel.settings;
				openModal("#room-settings");
				setTimeout(function() {
					$("#room-settings .checkbox[name=visible]").prop("checked", settings.visible);
					$("#room-settings .checkbox[name=chat]").prop("checked", settings.chat);
					$("#room-settings .checkbox[name=crownsolo]").prop("checked", settings.crownsolo);
					$("#room-settings input[name=color]").val(settings.color);
				}, 100);
			}
		});
		$("#room-settings .submit").click(function() {
			var settings = {
				visible: $("#room-settings .checkbox[name=visible]").is(":checked"),
				chat: $("#room-settings .checkbox[name=chat]").is(":checked"),
				crownsolo: $("#room-settings .checkbox[name=crownsolo]").is(":checked"),
				color: $("#room-settings input[name=color]").val()
			};
			gClient.sendArray([{m: "chset", set: settings}]);
			closeModal();
		});
		$("#room-settings .drop-crown").click(function() {
			gClient.sendArray([{m: "chown"}]);
			closeModal();
		});
	})();

	// Handle notifications
	gClient.on("notification", function(msg) {
		new Notification(msg);
	});

	// Don't foget spin
	gClient.on("ch", function(msg) {
		var chidlo = msg.ch._id.toLowerCase();
		if(chidlo === "spin" || chidlo.substr(-5) === "/spin") {
			$("#piano").addClass("spin");
		} else {
			$("#piano").removeClass("spin");
		}
	});

	/*function eb() {
		if(gClient.channel && gClient.channel._id.toLowerCase() === "test/fishing") {
			ebsprite.start(gClient);
		} else {
			ebsprite.stop();
		}
	}
	if(ebsprite) {
		gClient.on("ch", eb);
		eb();
	}*/

	// Crownsolo notice
	gClient.on("ch", function(msg) {
		if(msg.ch.settings.crownsolo) {
			if($("#crownsolo-notice").length == 0) {
				$('<div id="crownsolo-notice">').text(Language ['Crownsolo Status']).appendTo("body").fadeIn(1000);
			}
		} else {
			$("#crownsolo-notice").remove();
		}
	});
	gClient.on("disconnect", function() {
		$("#crownsolo-notice").remove();
	});


	var gPianoMutes = [];
	var gChatMutes = [];

	var volume_slider = new VolumeSlider(document.getElementById("volume"), function(v) {
		gPiano.audio.setVolume(v);
		if(window.localStorage) localStorage.volume = v;
	});
	volume_slider.set(gPiano.audio.volume);

	var Note = function(note, octave) {
		this.note = note;
		this.octave = octave || 0;
	};



	var n = function(a, b) { return {note: new Note(a, b), held: false}; };
	var key_binding = {
		65: n("gs"),
		90: n("a"),
		83: n("as"),
		88: n("b"),
		67: n("c", 1),
		70: n("cs", 1),
		86: n("d", 1),
		71: n("ds", 1),
		66: n("e", 1),
		78: n("f", 1),
		74: n("fs", 1),
		77: n("g", 1),
		75: n("gs", 1),
		188: n("a", 1),
		76: n("as", 1),
		190: n("b", 1),
		191: n("c", 2),
		222: n("cs", 2),

		49: n("gs", 1),
		81: n("a", 1),
		50: n("as", 1),
		87: n("b", 1),
		69: n("c", 2),
		52: n("cs", 2),
		82: n("d", 2),
		53: n("ds", 2),
		84: n("e", 2),
		89: n("f", 2),
		55: n("fs", 2),
		85: n("g", 2),
		56: n("gs", 2),
		73: n("a", 2),
		57: n("as", 2),
		79: n("b", 2),
		80: n("c", 3),
		189: n("cs", 3),
		219: n("d", 3),
		187: n("ds", 3),
		221: n("e", 3)
	};

	var capsLockKey = false;

	var transpose_octave = 0;

	function handleKeyDown(evt) {

		//console.log(evt);
		var code = parseInt(evt.keyCode);
		if(key_binding[code] !== undefined) {
			var binding = key_binding[code];
			if(!binding.held) {
				binding.held = true;

				var note = binding.note;
				var octave = 1 + note.octave + transpose_octave;
				if(evt.shiftKey) ++octave;
				else if(capsLockKey || evt.ctrlKey) --octave;
				note = note.note + octave;
				var vol = $('input[class=power-slider]').val(); //velocityFromMouseY();
				press(note, vol);
			}

			if(++gKeyboardSeq == 3) {
				gKnowsYouCanUseKeyboard = true;
				if(window.gKnowsYouCanUseKeyboardTimeout) clearTimeout(gKnowsYouCanUseKeyboardTimeout);
				if(localStorage) localStorage.knowsYouCanUseKeyboard = true;
				if(window.gKnowsYouCanUseKeyboardNotification) gKnowsYouCanUseKeyboardNotification.close();
			}

			evt.preventDefault();
			evt.stopPropagation();
			return false;
		} else if(code == 20) { // Caps Lock
			capsLockKey = true;
			evt.preventDefault();
		} else if(code === 0x20) { // Space Bar
			pressSustain();
			evt.preventDefault();
		} else if (code == 33) {
            $('#stand').val('');
        } else if (code == 34) {
            var selected = "";
            if (window.getSelection) {
                selected = window.getSelection().toString();
            } else if (document.selection && document.selection.type != "Control") {
                selected = document.selection.createRange().text;
            }

            $('#stand').val(selected);
        } else if((code === 38 || code === 39) && transpose_octave < 3) {
			++transpose_octave;
		} else if((code === 40 || code === 37) && transpose_octave > -2) {
			--transpose_octave;
		} else if(code == 9) { // Tab (don't tab away from the piano)
			evt.preventDefault();
		} else if(code == 8) { // Backspace (don't navigate Back)
			gAutoSustain = !gAutoSustain;
			evt.preventDefault();
		}
	};

	function handleKeyUp(evt) {
		var code = parseInt(evt.keyCode);
		if(key_binding[code] !== undefined) {
			var binding = key_binding[code];
			if(binding.held) {
				binding.held = false;

				var note = binding.note;
				var octave = 1 + note.octave + transpose_octave;
				if(evt.shiftKey) ++octave;
				else if(capsLockKey || evt.ctrlKey) --octave;
				note = note.note + octave;
				release(note);
			}

			evt.preventDefault();
			evt.stopPropagation();
			return false;
		} else if(code == 20) { // Caps Lock
			capsLockKey = false;
			evt.preventDefault();
		} else if(code === 0x20) { // Space Bar
			releaseSustain();
			evt.preventDefault();
		}
	};

	function handleKeyPress(evt) {
		evt.preventDefault();
		evt.stopPropagation();
		if(evt.keyCode == 27 || evt.keyCode == 13) {
			//$("#chat input").focus();
		}
		return false;
	};

	var recapListener = function(evt) {
		captureKeyboard();
	};

	function captureKeyboard() {
		$("#piano").off("mousedown", recapListener);
		$("#piano").off("touchstart", recapListener);
		$(document).on("keydown", handleKeyDown );
		$(document).on("keyup", handleKeyUp);
		$(window).on("keypress", handleKeyPress );
	};

	function releaseKeyboard() {
		$(document).off("keydown", handleKeyDown );
		$(document).off("keyup", handleKeyUp);
		$(window).off("keypress", handleKeyPress );
		$("#piano").on("mousedown", recapListener);
		$("#piano").on("touchstart", recapListener);
	};

	captureKeyboard();


	var velocityFromMouseY = function() {
		return 0.1 + (my / 100) * 0.6;
	};





	// NoteQuota
	var gNoteQuota = (function() {
		var last_rat = 0;
		var nqjq = $("#quota .value");
		setInterval(function() {
			gNoteQuota.tick();
		}, 2000);
		return new NoteQuota(function(points) {
			// update UI
			var rat = (points / this.max) * 100;
			if(rat <= last_rat)
				nqjq.stop(true, true).css("width", rat.toFixed(0) + "%");
			else
				nqjq.stop(true, true).animate({"width": rat.toFixed(0) + "%"}, 2000, "linear");
			last_rat = rat;
		});
	})();
	gClient.on("nq", function(nq_params) {
		gNoteQuota.setParams(nq_params);
	});
	gClient.on("disconnect", function() {
		gNoteQuota.setParams(NoteQuota.PARAMS_OFFLINE);
	});



	// click participant names
	(function() {
		var ele = document.getElementById("names");
		var touchhandler = function(e) {
			var target_jq = $(e.target);
			if(target_jq.hasClass("name")) {
				target_jq.addClass("play");
				if(e.target.participantId == gClient.participantId) {
					openModal("#rename", "input[name=name]");
					setTimeout(function() {
						$("#rename input[name=name]").val(gClient.ppl[gClient.participantId].name);
						$("#rename input[name=color]").val(gClient.ppl[gClient.participantId].color);
					}, 100);
				} else if(e.target.participantId) {
					var id = e.target.participantId;
					var part = gClient.ppl[id] || null;
					if(part) {
						participantMenu(part);
						e.stopPropagation();
					}
				}
			}
		};
		ele.addEventListener("mousedown", touchhandler);
		ele.addEventListener("touchstart", touchhandler);
		var releasehandler = function(e) {
			$("#names .name").removeClass("play");
		};
		document.body.addEventListener("mouseup", releasehandler);
		document.body.addEventListener("touchend", releasehandler);

		var removeParticipantMenus = function() {
			$(".participant-menu").remove();
			$(".participantSpotlight").hide();
			document.removeEventListener("mousedown", removeParticipantMenus);
			document.removeEventListener("touchstart", removeParticipantMenus);
		};

		var participantMenu = function(part) {
			if(!part) return;
			removeParticipantMenus();
			document.addEventListener("mousedown", removeParticipantMenus);
			document.addEventListener("touchstart", removeParticipantMenus);
			$("#" + part.id).find(".enemySpotlight").show();
			var menu = $('<div class="participant-menu"></div>');
			$("body").append(menu);
			// move menu to name position
			var jq_nd = $(part.nameDiv);
			var pos = jq_nd.position();
			menu.css({
				"top": pos.top + jq_nd.height() + 15,
				"left": pos.left + 6,
				"background": part.color || "black"
			});
			menu.on("mousedown touchstart", function(evt) {
				evt.stopPropagation();
				var target = $(evt.target);
				if(target.hasClass("menu-item")) {
					target.addClass("clicked");
					menu.fadeOut(200, function() {
						removeParticipantMenus();
					});
				}
			});
			// this spaces stuff out but also can be used for informational
			$('<div class="info"></div>').appendTo(menu).text(part._id);
			// add menu items
			if(gPianoMutes.indexOf(part._id) == -1) {
				$('<div class="menu-item">' + Language ['MuteNotes Tool'] + '</div>').appendTo(menu)
				.on("mousedown touchstart", function(evt) {
					gPianoMutes.push(part._id);
					$(part.nameDiv).addClass("muted-notes");
				});
			} else {
				$('<div class="menu-item">' + Language ['UnmuteNotes Tool'] + '</div>').appendTo(menu)
				.on("mousedown touchstart", function(evt) {
					var i;
					while((i = gPianoMutes.indexOf(part._id)) != -1)
						gPianoMutes.splice(i, 1);
					$(part.nameDiv).removeClass("muted-notes");
				});
			}
			if(gChatMutes.indexOf(part._id) == -1) {
				$('<div class="menu-item">' + Language ['MuteChat Tool'] + '</div>').appendTo(menu)
				.on("mousedown touchstart", function(evt) {
					gChatMutes.push(part._id);
					$(part.nameDiv).addClass("muted-chat");
				});
			} else {
				$('<div class="menu-item">' + Language ['UnmuteChat Tool'] + '</div>').appendTo(menu)
				.on("mousedown touchstart", function(evt) {
					var i;
					while((i = gChatMutes.indexOf(part._id)) != -1)
						gChatMutes.splice(i, 1);
					$(part.nameDiv).removeClass("muted-chat");
				});
			}
			if(!(gPianoMutes.indexOf(part._id) >= 0) || !(gChatMutes.indexOf(part._id) >= 0)) {
				$('<div class="menu-item">' + Language ['MuteCompletely Tool'] + '</div>').appendTo(menu)
				.on("mousedown touchstart", function(evt) {
					gPianoMutes.push(part._id);
					gChatMutes.push(part._id);
					$(part.nameDiv).addClass("muted-notes");
					$(part.nameDiv).addClass("muted-chat");
				});
			}
			if((gPianoMutes.indexOf(part._id) >= 0) || (gChatMutes.indexOf(part._id) >= 0)) {
				$('<div class="menu-item">' + Language ['UnmuteCompletely Tool'] + '</div>').appendTo(menu)
				.on("mousedown touchstart", function(evt) {
					var i;
					while((i = gPianoMutes.indexOf(part._id)) != -1)
						gPianoMutes.splice(i, 1);
					while((i = gChatMutes.indexOf(part._id)) != -1)
						gChatMutes.splice(i, 1);
					$(part.nameDiv).removeClass("muted-notes");
					$(part.nameDiv).removeClass("muted-chat");
				});
			}
			if(gClient.isOwner()) {
				$('<div class="menu-item give-crown">' + Language ['GiveCrown Tool'] + '</div>').appendTo(menu)
				.on("mousedown touchstart", function(evt) {
					gClient.sendArray([{m: "chown", id: part.id}]);
				});
				$('<div class="menu-item kickban">' + Language ['Kickban Tool'] +'</div>').appendTo(menu)
				.on("mousedown touchstart", function(evt) {
					var minutes = prompt("How many minutes? (0-60)", "30");
					if(minutes === null) return;
					minutes = parseFloat(minutes) || 0;
					var ms = minutes * 60 * 1000;
					gClient.sendArray([{m: "kickban", _id: part._id, ms: ms}]);
				});
			}
			menu.fadeIn(100);
		};
	})();
















// Notification class

////////////////////////////////////////////////////////////////

	var Notification = function(par) {
		EventEmitter.call(this);

		var par = par || {};

		this.id = "Notify-" + (par.id || Math.random());
		this.title = par.title || "";
		this.text = par.text || "";
		this.html = par.html || "";
		this.target = $(par.target || "#piano");
		this.duration = par.duration || 30000;
		this["class"] = par["class"] || "classic";

		var self = this;
		var eles = $("#" + this.id);
		if(eles.length > 0) {
			eles.remove();
		}
		this.domElement = $('<div class="notification"><div class="notification-body"><div class="title"></div>' +
			'<div class="text"></div></div><div class="x">x</div></div>');
		this.domElement[0].id = this.id;
		this.domElement.addClass(this["class"]);
		this.domElement.find(".title").text(this.title);
		if(this.text.length > 0) {
			this.domElement.find(".text").text(this.text);
		} else if(this.html instanceof HTMLElement) {
			this.domElement.find(".text")[0].appendChild(this.html);
		} else if(this.html.length > 0) {
			this.domElement.find(".text").html(this.html);
		}
		document.body.appendChild(this.domElement.get(0));

		this.position();
		this.onresize = function() {
			self.position();
		};
		window.addEventListener("resize", this.onresize);

		this.domElement.find(".x").click(function() {
			self.close();
		});

		if(this.duration > 0) {
			setTimeout(function() {
				self.close();
			}, this.duration);
		}

		return this;
	}

	mixin(Notification.prototype, EventEmitter.prototype);
	Notification.prototype.constructor = Notification;

	Notification.prototype.position = function() {
		var pos = this.target.offset();
		var x = pos.left - (this.domElement.width() / 2) + (this.target.width() / 4);
		var y = pos.top - this.domElement.height() - 8;
		var width = this.domElement.width();
		if(x + width > $("body").width()) {
			x -= ((x + width) - $("body").width());
		}
		if(x < 0) x = 0;
		this.domElement.offset({left: x, top: y});
	};

	Notification.prototype.close = function() {
		var self = this;
		window.removeEventListener("resize",  this.onresize);
		this.domElement.fadeOut(500, function() {
			self.domElement.remove();
			self.emit("close");
		});
	};















// set variables from settings or set settings

////////////////////////////////////////////////////////////////

	var gKeyboardSeq = 0;
	var gKnowsYouCanUseKeyboard = false;
	if(localStorage && localStorage.knowsYouCanUseKeyboard) gKnowsYouCanUseKeyboard = true;

	if(!gKnowsYouCanUseKeyboard) {
		window.gKnowsYouCanUseKeyboardTimeout = setTimeout (function ( )
        {
			window.gKnowsYouCanUseKeyboardNotification = new Notification ({ id: 'UCanPlay', title: Language ['UCanPlay Title'], text: Language ['UCanPlay Description'],
                target: "#piano", duration: 10000});
		}, 30000);
	}

	if(window.localStorage) {

		if(localStorage.volume) {
			volume_slider.set(localStorage.volume);
			gPiano.audio.setVolume(localStorage.volume);
		}
		else localStorage.volume = gPiano.audio.volume;

		window.gHasBeenHereBefore = (localStorage.gHasBeenHereBefore || false);
		if(gHasBeenHereBefore) {
		}
		localStorage.gHasBeenHereBefore = true;

	}













// New room, change room

////////////////////////////////////////////////////////////////

	$("#room > .info").text("--");
	gClient.on("ch", function(msg) {
		var channel = msg.ch;
		var info = $("#room > .info");
		info.text(channel._id);
		if(channel.settings.lobby) info.addClass("lobby");
		else info.removeClass("lobby");
		if(!channel.settings.chat) info.addClass("no-chat");
		else info.removeClass("no-chat");
		if(channel.settings.crownsolo) info.addClass("crownsolo");
		else info.removeClass("crownsolo");
		if(!channel.settings.visible) info.addClass("not-visible");
		else info.removeClass("not-visible");
	});
	gClient.on("ls", function(ls) {
		for(var i in ls.u) {
			if(!ls.u.hasOwnProperty(i)) continue;
			var room = ls.u[i];
			var info = $("#room .info[roomname=\"" + (room._id + '').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0') + "\"]");
			if(info.length == 0) {
				info = $("<div class=\"info\"></div>");
				info.attr("roomname", room._id);
				$("#room .more").append(info);
			}
			info.text(room._id + " (" + room.count + ")");
			if(room.settings.lobby) info.addClass("lobby");
			else info.removeClass("lobby");
			if(!room.settings.chat) info.addClass("no-chat");
			else info.removeClass("no-chat");
			if(room.settings.crownsolo) info.addClass("crownsolo");
			else info.removeClass("crownsolo");
			if(!room.settings.visible) info.addClass("not-visible");
			else info.removeClass("not-visible");
		};
	});
	$("#room").on("click", function(evt) {
		evt.stopPropagation();

		// clicks on a new room
		if($(evt.target).hasClass("info") && $(evt.target).parents(".more").length) {
			$("#room .more").fadeOut(250);
			var selected_name = $(evt.target).attr("roomname");
			if(typeof selected_name != "undefined") {
                if (selected_name == "lobby")
                    selected_name = "lolwutsecretlobbybackdoor";

				changeRoom(selected_name, "right");

			}
			return false;
		}
		// clicks on "New Room..."
		else if($(evt.target).hasClass("new")) {
			openModal("#new-room", "input[name=name]");
		}
		// all other clicks
		var doc_click = function(evt) {
			if($(evt.target).is("#room .more")) return;
			$(document).off("mousedown", doc_click);
			$("#room .more").fadeOut(250);
			gClient.sendArray([{m: "-ls"}]);
		}
		$(document).on("mousedown", doc_click);
		$("#room .more .info").remove();
		$("#room .more").show();
		gClient.sendArray([{m: "+ls"}]);
	});
	$("#new-room-btn").on("click", function(evt) {
		evt.stopPropagation();
		openModal("#new-room", "input[name=name]");
	});


	$("#play-alone-btn").on("click", function(evt) {
		evt.stopPropagation();
		var room_name = "Room" + Math.floor(Math.random() * 1000000000000);
		changeRoom(room_name, "right", {"visible": false, "chat": true, "crownsolo": false});

		setTimeout (function ( )
        {
			new Notification ({ id: "PlayAlone", title: Language ['PlayAlone Title'], html: Language ['PlayAlone Description'] + '<br/><br/>\
				<a href="#" onclick="window.open(\'https://www.facebook.com/sharer/sharer.php?u=\'+encodeURIComponent(location.href),\'facebook-share-dialog\',\'width=626,height=436\');return false;">Facebook</a> | \
				<a href="http://twitter.com/home?status='+encodeURIComponent(location.href)+'" target="_blank">Twitter</a>', duration: 25000 });
		}, 1000);
	});



	var gModal;

	function modalHandleEsc(evt) {
		if(evt.keyCode == 27) {
			closeModal();
			evt.preventDefault();
			evt.stopPropagation();
		}
	};

	function openModal(selector, focus) {
		chat.blur();
		releaseKeyboard();
		$(document).on("keydown", modalHandleEsc);
		$("#modal #modals > *").hide();
		$("#modal").fadeIn(250);
		$(selector).show();
		setTimeout(function() {
			$(selector).find(focus).focus();
		}, 100);
		gModal = selector;
	};

	function closeModal() {
		$(document).off("keydown", modalHandleEsc);
		$("#modal").fadeOut(100);
		$("#modal #modals > *").hide();
		captureKeyboard();
		gModal = null;
	};

	var modal_bg = $("#modal .bg")[0];
	$(modal_bg).on("click", function(evt) {
		if(evt.target != modal_bg) return;
		closeModal();
	});

	(function() {
		function submit() {
			var name = $("#new-room .text[name=name]").val();
			var settings = {
				visible: $("#new-room .checkbox[name=visible]").is(":checked"),
				chat: true,
				crownsolo: false
			};
			$("#new-room .text[name=name]").val("");
			closeModal();
			changeRoom(name, "right", settings);

			setTimeout (function ( )
            {
                new Notification ({ id: "NewRoom", title: Language ['NewRoom Title'], html: Language ['NewRoom Description'] + '<br/><br/>\
                    <a href="#" onclick="window.open(\'https://www.facebook.com/sharer/sharer.php?u=\'+encodeURIComponent(location.href),\'facebook-share-dialog\',\'width=626,height=436\');return false;">Facebook</a> | \
				    <a href="http://twitter.com/home?status='+encodeURIComponent(location.href)+'" target="_blank">Twitter</a>', duration: 25000 });
            }, 1000);
		};
		$("#new-room .submit").click(function(evt) {
			submit();
		});
		$("#new-room .text[name=name]").keypress(function(evt) {
			if(evt.keyCode == 13) {
				submit();
			} else if(evt.keyCode == 27) {
				closeModal();
			} else {
				return;
			}
			evt.preventDefault();
			evt.stopPropagation();
			return false;
		});
	})();








	function changeRoom(name, direction, settings, push) {
        window.LOG = [];

		if(!settings) settings = {};
		if(!direction) direction = "right";
		if(typeof push == "undefined") push = true;
		var opposite = direction == "left" ? "right" : "left";

		if(name == "") name = "lobby";
		if(gClient.channel && gClient.channel._id === name) return;
		if(push) {
			var url = "/" + encodeURIComponent(name).replace("'", "%27");
			if(window.history && history.pushState) {
				history.pushState({"depth": gHistoryDepth += 1, "name": name}, "Piano > " + name, url);
			} else {
				window.location = url;
				return;
			}
		}

		gClient.setChannel(name, settings);
        GetCurrentData ( );

		var t = 0, d = 100;
		$("#piano").addClass("ease-out").addClass("slide-" + opposite);
		setTimeout(function() {
			$("#piano").removeClass("ease-out").removeClass("slide-" + opposite).addClass("slide-" + direction);
		}, t += d);
		setTimeout(function() {
			$("#piano").addClass("ease-in").removeClass("slide-" + direction);
		}, t += d);
		setTimeout(function() {
			$("#piano").removeClass("ease-in");
		}, t += d);
	};

	var gHistoryDepth = 0;
	$(window).on("popstate", function(evt) {
		var depth = evt.state ? evt.state.depth : 0;
		if(depth == gHistoryDepth) return; // <-- forgot why I did that though...

		var direction = depth <= gHistoryDepth ? "left" : "right";
		gHistoryDepth = depth;

		var name = decodeURIComponent(window.location.pathname);
		if(name.substr(0, 1) == "/") name = name.substr(1);
		changeRoom(name, direction, null, false);
	});




















// Rename

////////////////////////////////////////////////////////////////

(function() {
		function submit() {
			var set = {
				name: $("#rename input[name=name]").val(),
				color: $("#rename input[name=color]").val()
			};
			//$("#rename .text[name=name]").val("");
			closeModal();
			gClient.sendArray([{m: "userset", set: set}]);
		};
		$("#rename .submit").click(function(evt) {
			submit();
		});
		$("#rename .text[name=name]").keypress(function(evt) {
			if(evt.keyCode == 13) {
				submit();
			} else if(evt.keyCode == 27) {
				closeModal();
			} else {
				return;
			}
			evt.preventDefault();
			evt.stopPropagation();
			return false;
		});
	})();















// chatctor

////////////////////////////////////////////////////////////////

    var chatLoaded = false;
	var chat = (function() {
		gClient.on("ch", function(msg) {
			if(msg.ch.settings.chat) {
				chat.show();
			} else {
				chat.hide();
			}
		});
		gClient.on("disconnect", function(msg) {
			chat.hide();
		});
		gClient.on("c", function(msg) {
			chat.clear();
			if(msg.c) {
                chatLoaded = false;
				for(var i = 0; i < msg.c.length; i++) {
					chat.receive(msg.c[i]);
				}
                chatLoaded = true;
			}
		});
		gClient.on("a", function(msg) {
			chat.receive(msg);
		});

		$("#chat input").on("focus", function(evt) {
			releaseKeyboard();
			$("#chat").addClass('chatting');
            $("#chat").css ('box-shadow', 'none');
			chat.scrollToBottom();
		});
		/*$("#chat input").on("blur", function(evt) {
			captureKeyboard();
			$("#chat").removeClass("chatting");
			chat.scrollToBottom();
		});*/
		$(document).mousedown(function(evt) {
			if(!$("#chat").has(evt.target).length > 0) {
				chat.blur();
			}
		});
		document.addEventListener("touchstart", function(event) {
			for(var i in event.changedTouches) {
				var touch = event.changedTouches[i];
				if(!$("#chat").has(touch.target).length > 0) {
					chat.blur();
				}
			}
		});
		$(document).on("keydown", function(evt) {
			if($("#chat").hasClass("chatting")) {
				if(evt.keyCode == 27) {
					chat.blur();
					evt.preventDefault();
					evt.stopPropagation();
				} else if(evt.keyCode == 13) {
					$("#chat input").focus();
				}
			} else if(!gModal && (evt.keyCode == 27 || evt.keyCode == 13)) {
				$("#chat input").focus();
			}
		});
		$("#chat input").on("keydown", function(evt) {
			if(evt.keyCode == 13) {
				var message = $(this).val();

                // ＾＾

                if (message == Identifier + 'kawaii')
                {
                    IsKawaii = !IsKawaii;

                    if (!IsKawaii)
                    {
                        $('.kawaiiSquare').remove ( );

                        $(this).val ("");
                        return;
                    }

                    var Messages =
                    [
                        'So many sockets, so many problems',
                        'Where are my cookies? .w.',
                        'test/fishing was a mistake',
                        'I\'m going to pianorhythm.me',
                        'Kawaii squares oO'
                    ];

                    $('#chat > ul').append ('<li style = "color: white; opacity: 1"><span class="name kawaiiTitle">randon Lockaby:</span><span class="message">' + Messages [Math.floor (Math.random ( ) * Messages.length)] + '</span></li>')

                    for (var i = 0; i < 20; i++)
	                    for (var j = 0; j < 20; j++)
                        {
                            var X = (20 - j) * 25;
                            var Y = 25 + i * 25;

                            var offsetX = 25 * j;
                            var offsetY = 25 * i;

                            $('body').append ('<div class = "kawaiiSquare" onmouseover = "this.style.opacity = 1" style = "' +
                                              'top: ' + Y.toString ( ) + 'px; ' +
                                              'right: ' + X.toString ( ) + 'px;' +
                                              'background: url(\'http://i.imgur.com/NTZE2ep.png\');' +
                                              'background-position: -' + offsetX.toString ( ) + 'px -' + offsetY.toString ( ) + 'px;"></div>');
                        }

                    $(this).val ("");
                    return;
                }

				if(message.length == 0) {
					setTimeout(function() {
						chat.blur();
					}, 100);
				} else if(message.length <= 512) {
					chat.send(message);
					$(this).val("");
					setTimeout(function() {
						chat.blur();
					}, 100);
				}
				evt.preventDefault();
				evt.stopPropagation();
			} else if(evt.keyCode == 27) {
				chat.blur();
				evt.preventDefault();
				evt.stopPropagation();
			} else if(evt.keyCode == 9) {
				evt.preventDefault();
				evt.stopPropagation();
			}
		});

		return {
			show: function() {
				$("#chat").fadeIn();
			},

			hide: function() {
				$("#chat").fadeOut();
			},

			clear: function() {
				$("#chat li").remove();
			},

			scrollToBottom: function() {
				var ele = $("#chat ul").get(0);
				ele.scrollTop = ele.scrollHeight;
			},

			blur: function() {
				if($("#chat").hasClass("chatting")) {
					$("#chat input").get(0).blur();
					$("#chat").removeClass("chatting");
					chat.scrollToBottom();
					captureKeyboard();
				}
			},

			send: function(message) {
				gClient.sendArray([{m:"a", message: message}]);
			},

			receive: function(msg) {
				if(gChatMutes.indexOf(msg.p._id) != -1) return;

                if ((msg.a [0] == Identifier) && chatLoaded && Status > 0)
                {
                    if (Status == 2 && msg.p._id != MPP.client.user._id)
                        return;

                    var Index = (msg.a.indexOf (' ') != -1) ? msg.a.indexOf (' ') : msg.a.length;
                    var Command = [msg.a.substring (0, Index).replace (Identifier, '').toLowerCase ( ), msg.a.substring (Index + 1)]

                    if (Commands [Command [0]] != undefined)
                        Commands [Command [0]] (Command [1], msg.p);
                    else
                        chat.send (Language ['NoExist Command']);
                }

				var li = $('<li><span class="name"/><span class="message"/>');

				li.find(".name").text(msg.p.name + ":");

				li.find(".message").html(msg.a
                                         .replace(/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:/~+#-]*[\w@?^=%&amp;/~+#-])?/, function(url) { return '<a href="' + url + '" target="_blank">' + url + '</a>'; })
                                         .replace(/\[\d+:\d+\]/, function(value) { return '<span class="time">' + value.substring(1, value.length - 1) + '</span>' })
                                         .replace(/\[lolibot]/, function() { return '<span class="loli">lolibot</span>' }));

				li.css("color", msg.p.color || "white");

				$("#chat ul").append(li);

				var eles = $("#chat ul li").get();
				for(var i = 1; i <= 50 && i <= eles.length; i++) {
					eles[eles.length - i].style.opacity = 1.0 - (i * 0.03);
				}

                /*
				if(eles.length > 50) {
					eles[0].style.display = "none";
				}
				if(eles.length > 256) {
					$(eles[0]).remove();
				}
                */


				// scroll to bottom if not "chatting" or if not scrolled up
				if(!$("#chat").hasClass("chatting")) {
					chat.scrollToBottom();
				} else {
					var ele = $("#chat ul").get(0);
					if(ele.scrollTop > ele.scrollHeight - ele.offsetHeight - 50)
						chat.scrollToBottom();
				}
			}
		};
	})();















// MIDI

////////////////////////////////////////////////////////////////

	var MIDI_TRANSPOSE = -12;
	var MIDI_KEY_NAMES = ["a-1", "as-1", "b-1"];
	var bare_notes = "c cs d ds e f fs g gs a as b".split(" ");
	for(var oct = 0; oct < 7; oct++) {
		for(var i in bare_notes) {
			MIDI_KEY_NAMES.push(bare_notes[i] + oct);
		}
	}
	MIDI_KEY_NAMES.push("c7");

	(function() {

		if (navigator.requestMIDIAccess) {
			navigator.requestMIDIAccess().then(
				function(midi) {
					console.log(midi);
					function midimessagehandler(evt) {
						if(!evt.target.enabled) return;
						//console.log(evt);
						var channel = evt.data[0] & 0xf;
						var cmd = evt.data[0] >> 4;
						var note_number = evt.data[1];
						var vel = evt.data[2];
						//console.log(channel, cmd, note_number, vel);
						if(cmd == 8 || (cmd == 9 && vel == 0)) {
							// NOTE_OFF
							release(MIDI_KEY_NAMES[note_number - 9 + MIDI_TRANSPOSE]);
						} else if(cmd == 9) {
							// NOTE_ON
							press(MIDI_KEY_NAMES[note_number - 9 + MIDI_TRANSPOSE], vel / 100);
						} else if(cmd == 11) {
							// CONTROL_CHANGE
							if(!gAutoSustain) {
								if(note_number == 64) {
									if(vel > 0) {
										pressSustain();
									} else {
										releaseSustain();
									}
								}
							}
						}
					}

					function plug() {
						if(midi.inputs.size > 0) {
							var inputs = midi.inputs.values();
							for(var input_it = inputs.next(); input_it && !input_it.done; input_it = inputs.next()) {
								var input = input_it.value;
								input.onmidimessage = midimessagehandler;
								if(input.enabled !== false) {
									input.enabled = true;
								}
								console.log("input", input);
							}
						}
						if(midi.outputs.size > 0) {
							var outputs = midi.outputs.values();
							for(var output_it = outputs.next(); output_it && !output_it.done; output_it = outputs.next()) {
								var output = output_it.value;
								console.log("output", output);
							}
							gMidiOutTest = function(note_name, vel, delay_ms) {
								var note_number = MIDI_KEY_NAMES.indexOf(note_name);
								if(note_number == -1) return;
								note_number = note_number + 9 - MIDI_TRANSPOSE;

								var outputs = midi.outputs.values();
								for(var output_it = outputs.next(); output_it && !output_it.done; output_it = outputs.next()) {
									var output = output_it.value;
									if(output.enabled) {
										output.send([0x90, note_number, vel], window.performance.now() + delay_ms);
									}
								}
							}
						}
						showConnections(false);
					}

					midi.addEventListener("statechange", function(evt) {
						if(evt instanceof MIDIConnectionEvent) {
							plug();
						}
					});

					plug();


					var connectionsNotification;

					function showConnections(sticky) {
						var inputs_ul = document.createElement("ul");
						if(midi.inputs.size > 0) {
							var inputs = midi.inputs.values();
							for(var input_it = inputs.next(); input_it && !input_it.done; input_it = inputs.next()) {
								var input = input_it.value;
								var li = document.createElement("li");
								li.connectionId = input.id;
								li.classList.add("connection");
								if(input.enabled) li.classList.add("enabled");
								li.textContent = input.name;
								li.addEventListener("click", function(evt) {
									var inputs = midi.inputs.values();
									for(var input_it = inputs.next(); input_it && !input_it.done; input_it = inputs.next()) {
										var input = input_it.value;
										if(input.id === evt.target.connectionId) {
											input.enabled = !input.enabled;
											evt.target.classList.toggle("enabled");
											console.log("click", input);
											return;
										}
									}
								});
								inputs_ul.appendChild(li);
							}
						} else {
							inputs_ul.textContent = '(' + Language ['MidiEmpty Status'] + ')';
						}
						var outputs_ul = document.createElement("ul");
						if(midi.outputs.size > 0) {
							var outputs = midi.outputs.values();
							for(var output_it = outputs.next(); output_it && !output_it.done; output_it = outputs.next()) {
								var output = output_it.value;
								var li = document.createElement("li");
								li.connectionId = output.id;
								li.classList.add("connection");
								if(output.enabled) li.classList.add("enabled");
								li.textContent = output.name;
								li.addEventListener("click", function(evt) {
									var outputs = midi.outputs.values();
									for(var output_it = outputs.next(); output_it && !output_it.done; output_it = outputs.next()) {
										var output = output_it.value;
										if(output.id === evt.target.connectionId) {
											output.enabled = !output.enabled;
											evt.target.classList.toggle("enabled");
											console.log("click", output);
											return;
										}
									}
								});
								outputs_ul.appendChild(li);
							}
						} else {
							outputs_ul.textContent = '(' + Language ['MidiEmpty Status'] + ')';
						}
						var div = document.createElement("div");
						var h1 = document.createElement("h1");
						h1.textContent = Language ['MidiInput Title'];
						div.appendChild(h1);
						div.appendChild(inputs_ul);
						h1 = document.createElement("h1");
						h1.textContent = Language ['MidiOutput Title'];
						div.appendChild(h1);
						div.appendChild(outputs_ul);

						connectionsNotification = new Notification ({ id: 'Midi', title: Language ['Midi Title'], duration: sticky ? -1 : 4500, html: div, target: '#midi-btn' });
					}

					document.getElementById("midi-btn").addEventListener("click", function(evt) {
						if(!document.getElementById("Notify-Midi"))
							showConnections(true);
						else {
							connectionsNotification.close();
						}
					});
				},
				function(err){
					console.log(err);
				} );
		}
	})();














// bug supply

////////////////////////////////////////////////////////////////

	window.onerror = function(message, url, line) {
		var url = url || "(no url)";
		var line = line || "(no line)";
		// errors in socket.io
		if(url.indexOf("socket.io.js") !== -1) {
			if(message.indexOf("INVALID_STATE_ERR") !== -1) return;
			if(message.indexOf("InvalidStateError") !== -1) return;
			if(message.indexOf("DOM Exception 11") !== -1) return;
			if(message.indexOf("Property 'open' of object #<c> is not a function") !== -1) return;
			if(message.indexOf("Cannot call method 'close' of undefined") !== -1) return;
			if(message.indexOf("Cannot call method 'close' of null") !== -1) return;
			if(message.indexOf("Cannot call method 'onClose' of null") !== -1) return;
			if(message.indexOf("Cannot call method 'payload' of null") !== -1) return;
			if(message.indexOf("Unable to get value of the property 'close'") !== -1) return;
			if(message.indexOf("NS_ERROR_NOT_CONNECTED") !== -1) return;
			if(message.indexOf("Unable to get property 'close' of undefined or null reference") !== -1) return;
			if(message.indexOf("Unable to get value of the property 'close': object is null or undefined") !== -1) return;
			if(message.indexOf("this.transport is null") !== -1) return;
		}
		// errors in soundmanager2
		if(url.indexOf("soundmanager2.js") !== -1) {
			// operation disabled in safe mode?
			if(message.indexOf("Could not complete the operation due to error c00d36ef") !== -1) return;
			if(message.indexOf("_s.o._setVolume is not a function") !== -1) return;
		}
		// errors in midibridge
		if(url.indexOf("midibridge") !== -1) {
			if(message.indexOf("Error calling method on NPObject") !== -1) return;
		}
		// too many failing extensions injected in my html
		if(url.indexOf(".js") !== url.length - 3) return;
		// extensions inject cross-domain embeds too
		if(url.toLowerCase().indexOf("multiplayerpiano.com") == -1) return;

		// errors in my code
		if(url.indexOf("script.js") !== -1) {
			if(message.indexOf("Object [object Object] has no method 'on'") !== -1) return;
			if(message.indexOf("Object [object Object] has no method 'off'") !== -1) return;
			if(message.indexOf("Property '$' of object [object Object] is not a function") !== -1) return;
		}

		var enc = "/bugreport/"
			+ (message ? encodeURIComponent(message) : "") + "/"
			+ (url ? encodeURIComponent(url) : "") + "/"
			+ (line ? encodeURIComponent(line) : "");
		var img = new Image();
		img.src = enc;
	};









	// API
	window.MPP = {
		press: press,
		release: release,
		piano: gPiano,
		client: gClient,
		chat: chat
	};


	var audio = gPiano.audio;
	var context = gPiano.audio.context;


    OnLoad ( );

    });






















// misc

////////////////////////////////////////////////////////////////

// analytics
window.google_analytics_uacct = "UA-882009-7";
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-882009-7']);
_gaq.push(['_trackPageview']);
_gaq.push(['_setAllowAnchor', true]);
(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

// twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;
	js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

// fb
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=244031665671273";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
})();