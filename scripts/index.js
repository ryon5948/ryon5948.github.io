$(function(){
	var $container = $("body"),
		$section_template = $container.find('.section_template');
	
	for(item of content) {
		$section = $section_template.clone();
		$section.find('.title').text(item.title);
		$section.find('.content').text(item.content);
		$section.find('.author').text(item.author);
		$section.appendTo($container);
	}
	
	// Remove the template from the page.
	$section_template.remove();
});

$(initializeBackToTop);

function initializeBackToTop() {
   $icon = $('.icon');
   $icon.click(function() {
	$('html, body').animate({ scrollTop: 0 }, 600);
    	return false;
   });

   $(window).scroll(function() {
	window.scrollY == 0 ? $icon.hide(600) : $icon.show(600);
   });
}



var content = [
    {
    	title:"Wolfram's Dirge",
    	author:"Thomas Lovell Beddoes",
    	content:"IF thou wilt ease thine heart	 \nOf love and all its smart,	 \n  Then sleep, dear, sleep;	 \nAnd not a sorrow	 \n  Hang any tear on your eyelashes;\n    Lie still and deep,	 \n  Sad soul, until the sea-wave washes	 \nThe rim o' the sun to-morrow,	 \n    In eastern sky.	 \n \nBut wilt thou cure thine heart\nOf love and all its smart,	 \n  Then die, dear, die;	 \n'Tis deeper, sweeter,	 \n  Than on a rose-bank to lie dreaming	 \n    With folded eye;\n  And there alone, amid the beaming	 \nOf Love's stars, thou'lt meet her	 \n    In eastern sky."
     },
     {
    	 title:"When You are Old",
    	 author: "W.B. Yeats",
    	 content:"When you are old and grey and full of sleep,\nAnd nodding by the fire, take down this book,\nAnd slowly read, and dream of the soft look\nYour eyes had once, and of their shadows deep;\n\nHow many loved your moments of glad grace,\nAnd loved your beauty with love false or true,\nBut one man loved the pilgrim soul in you,\nAnd loved the sorrows of your changing face;\n\nAnd bending down beside the glowing bars,\nMurmur, a little sadly, how Love fled\nAnd paced upon the mountains overhead\nAnd hid his face amid a crowd of stars."
     },
     {
    	 title:"Into the Twilight",
    	 author: "W.B. Yeats",
    	 content:"OUT-WORN heart, in a time out-worn,	 \nCome clear of the nets of wrong and right;	 \nLaugh heart again in the gray twilight,	 \nSigh, heart, again in the dew of the morn.	 \n  \nYour mother Eire is always young,	         \nDew ever shining and twilight gray;	 \nThough hope fall from you and love decay,	 \nBurning in fires of a slanderous tongue.	 \n  \nCome, heart, where hill is heaped upon hill:	 \nFor there the mystical brotherhood	  \nOf sun and moon and hollow and wood	 \nAnd river and stream work out their will;	 \n  \nAnd God stands winding His lonely horn,	 \nAnd time and the world are ever in flight;	 \nAnd love is less kind than the gray twilight,	  \nAnd hope is less dear than the dew of the morn."
     },
     {
    	 title:"Into Battle",
    	 author: "Julian Grenfell",
    	 content: "The naked earth is warm with Spring,\nAnd with green grass and bursting trees\nLeans to the sun's gaze glorying,\nAnd quivers in the sunny breeze;\nAnd life is Colour and Warmth and Light,\nAnd a striving evermore for these;\nAnd he is dead who will not fight,\nAnd who dies fighting has increase.\n\nThe fighting man shall from the sun\nTake warmth, and life from glowing earth;\nSpeed with the light-foot winds to run\nAnd with the trees to newer birth;\nAnd find, when fighting shall be done,\nGreat rest, and fulness after dearth.\n\nAll the bright company of Heaven\nHold him in their bright comradeship,\nThe Dog star, and the Sisters Seven,\nOrion's belt and sworded hip:\n\nThe woodland trees that stand together,\nThey stand to him each one a friend;\nThey gently speak in the windy weather;\nThey guide to valley and ridges end.\n\nThe kestrel hovering by day,\nAnd the little owls that call by night,\nBid him be swift and keen as they,\nAs keen of ear, as swift of sight.\n\nThe blackbird sings to him: \"Brother, brother,\nIf this be the last song you shall sing,\nSing well, for you may not sing another;\nBrother, sing.\"\n\nIn dreary doubtful waiting hours,\nBefore the brazen frenzy starts,\nThe horses show him nobler powers; —\nO patient eyes, courageous hearts!\n\nAnd when the burning moment breaks,\nAnd all things else are out of mind,\nAnd only joy of battle takes\nHim by the throat and makes him blind,\nThrough joy and blindness he shall know,\nNot caring much to know, that still\nNor lead nor steel shall reach him, so\nThat it be not the Destined Will.\n\nThe thundering line of battle stands,\nAnd in the air Death moans and sings;\nBut Day shall clasp him with strong hands,\nAnd Night shall fold him in soft wings."
     },
     {
    	 title:"The Love Song of J. Alfred Prufrock",
    	 author:"T.S. Eliot",
    	 content:"Let us go then, you and I,\nWhen the evening is spread out against the sky\nLike a patient etherized upon a table;\nLet us go, through certain half-deserted streets,\nThe muttering retreats\nOf restless nights in one-night cheap hotels\nAnd sawdust restaurants with oyster-shells:\nStreets that follow like a tedious argument\nOf insidious intent\nTo lead you to an overwhelming question ...\nOh, do not ask, “What is it?”\nLet us go and make our visit.\n\nIn the room the women come and go\nTalking of Michelangelo.\n\nThe yellow fog that rubs its back upon the window-panes,\nThe yellow smoke that rubs its muzzle on the window-panes,\nLicked its tongue into the corners of the evening,\nLingered upon the pools that stand in drains,\nLet fall upon its back the soot that falls from chimneys,\nSlipped by the terrace, made a sudden leap,\nAnd seeing that it was a soft October night,\nCurled once about the house, and fell asleep.\n\nAnd indeed there will be time\nFor the yellow smoke that slides along the street,\nRubbing its back upon the window-panes;\nThere will be time, there will be time\nTo prepare a face to meet the faces that you meet;\nThere will be time to murder and create,\nAnd time for all the works and days of hands\nThat lift and drop a question on your plate;\nTime for you and time for me,\nAnd time yet for a hundred indecisions,\nAnd for a hundred visions and revisions,\nBefore the taking of a toast and tea.\n\nIn the room the women come and go\nTalking of Michelangelo.\n\nAnd indeed there will be time\nTo wonder, “Do I dare?” and, “Do I dare?”\nTime to turn back and descend the stair,\nWith a bald spot in the middle of my hair —\n(They will say: “How his hair is growing thin!”)\nMy morning coat, my collar mounting firmly to the chin,\nMy necktie rich and modest, but asserted by a simple pin —\n(They will say: “But how his arms and legs are thin!”)\nDo I dare\nDisturb the universe?\nIn a minute there is time\nFor decisions and revisions which a minute will reverse.\n\nFor I have known them all already, known them all:\nHave known the evenings, mornings, afternoons,\nI have measured out my life with coffee spoons;\nI know the voices dying with a dying fall\nBeneath the music from a farther room.\n               So how should I presume?\n\nAnd I have known the eyes already, known them all—\nThe eyes that fix you in a formulated phrase,\nAnd when I am formulated, sprawling on a pin,\nWhen I am pinned and wriggling on the wall,\nThen how should I begin\nTo spit out all the butt-ends of my days and ways?\n               And how should I presume?\n\nAnd I have known the arms already, known them all—\nArms that are braceleted and white and bare\n(But in the lamplight, downed with light brown hair!)\nIs it perfume from a dress\nThat makes me so digress?\nArms that lie along a table, or wrap about a shawl.\n               And should I then presume?\n               And how should I begin?\n\nShall I say, I have gone at dusk through narrow streets\nAnd watched the smoke that rises from the pipes\nOf lonely men in shirt-sleeves, leaning out of windows? ...\n\nI should have been a pair of ragged claws\nScuttling across the floors of silent seas.\n\nAnd the afternoon, the evening, sleeps so peacefully!\nSmoothed by long fingers,\nAsleep ... tired ... or it malingers,\nStretched on the floor, here beside you and me.\nShould I, after tea and cakes and ices,\nHave the strength to force the moment to its crisis?\nBut though I have wept and fasted, wept and prayed,\nThough I have seen my head (grown slightly bald) brought in upon a platter,\nI am no prophet — and here’s no great matter;\nI have seen the moment of my greatness flicker,\nAnd I have seen the eternal Footman hold my coat, and snicker,\nAnd in short, I was afraid.\n\nAnd would it have been worth it, after all,\nAfter the cups, the marmalade, the tea,\nAmong the porcelain, among some talk of you and me,\nWould it have been worth while,\nTo have bitten off the matter with a smile,\nTo have squeezed the universe into a ball\nTo roll it towards some overwhelming question,\nTo say: “I am Lazarus, come from the dead,\nCome back to tell you all, I shall tell you all”—\nIf one, settling a pillow by her head\n               Should say: “That is not what I meant at all;\n               That is not it, at all.”\n\nAnd would it have been worth it, after all,\nWould it have been worth while,\nAfter the sunsets and the dooryards and the sprinkled streets,\nAfter the novels, after the teacups, after the skirts that trail along the floor—\nAnd this, and so much more?—\nIt is impossible to say just what I mean!\nBut as if a magic lantern threw the nerves in patterns on a screen:\nWould it have been worth while\nIf one, settling a pillow or throwing off a shawl,\nAnd turning toward the window, should say:\n               “That is not it at all,\n               That is not what I meant, at all.”\n\nNo! I am not Prince Hamlet, nor was meant to be;\nAm an attendant lord, one that will do\nTo swell a progress, start a scene or two,\nAdvise the prince; no doubt, an easy tool,\nDeferential, glad to be of use,\nPolitic, cautious, and meticulous;\nFull of high sentence, but a bit obtuse;\nAt times, indeed, almost ridiculous—\nAlmost, at times, the Fool.\n\nI grow old ... I grow old ...\nI shall wear the bottoms of my trousers rolled.\n\nShall I part my hair behind?   Do I dare to eat a peach?\nI shall wear white flannel trousers, and walk upon the beach.\nI have heard the mermaids singing, each to each.\n\nI do not think that they will sing to me.\n\nI have seen them riding seaward on the waves\nCombing the white hair of the waves blown back\nWhen the wind blows the water white and black.\nWe have lingered in the chambers of the sea\nBy sea-girls wreathed with seaweed red and brown\nTill human voices wake us, and we drown."
     },
     {
    	title:"The Hollow Men",
    	author:"T.S. Eliot",
    	content:"                 I\n\n    We are the hollow men\n    We are the stuffed men\n    Leaning together\n    Headpiece filled with straw. Alas!\n    Our dried voices, when\n    We whisper together\n    Are quiet and meaningless\n    As wind in dry grass\n    Or rats' feet over broken glass\n    In our dry cellar\n    \n    Shape without form, shade without colour,\n    Paralysed force, gesture without motion;\n    \n    Those who have crossed\n    With direct eyes, to death's other Kingdom\n    Remember us-if at all-not as lost\n    Violent souls, but only\n    As the hollow men\n    The stuffed men.\n\n    \n                 II\n\n    Eyes I dare not meet in dreams\n    In death's dream kingdom\n    These do not appear:\n    There, the eyes are\n    Sunlight on a broken column\n    There, is a tree swinging\n    And voices are\n    In the wind's singing\n    More distant and more solemn\n    Than a fading star.\n    \n    Let me be no nearer\n    In death's dream kingdom\n    Let me also wear\n    Such deliberate disguises\n    Rat's coat, crowskin, crossed staves\n    In a field\n    Behaving as the wind behaves\n    No nearer-\n    \n    Not that final meeting\n    In the twilight kingdom\n\n    \n                 III\n\n    This is the dead land\n    This is cactus land\n    Here the stone images\n    Are raised, here they receive\n    The supplication of a dead man's hand\n    Under the twinkle of a fading star.\n    \n    Is it like this\n    In death's other kingdom\n    Waking alone\n    At the hour when we are\n    Trembling with tenderness\n    Lips that would kiss\n    Form prayers to broken stone.\n\n    \n                 IV\n\n    The eyes are not here\n    There are no eyes here\n    In this valley of dying stars\n    In this hollow valley\n    This broken jaw of our lost kingdoms\n    \n    In this last of meeting places\n    We grope together\n    And avoid speech\n    Gathered on this beach of the tumid river\n    \n    Sightless, unless\n    The eyes reappear\n    As the perpetual star\n    Multifoliate rose\n    Of death's twilight kingdom\n    The hope only\n    Of empty men.\n\n    \n                 V\n\n    Here we go round the prickly pear\n    Prickly pear prickly pear\n    Here we go round the prickly pear\n    At five o'clock in the morning.\n    \n    Between the idea\n    And the reality\n    Between the motion\n    And the act\n    Falls the Shadow\n                                   For Thine is the Kingdom\n    \n    Between the conception\n    And the creation\n    Between the emotion\n    And the response\n    Falls the Shadow\n                                   Life is very long\n    \n    Between the desire\n    And the spasm\n    Between the potency\n    And the existence\n    Between the essence\n    And the descent\n    Falls the Shadow\n                                   For Thine is the Kingdom\n    \n    For Thine is\n    Life is\n    For Thine is the\n    \n    This is the way the world ends\n    This is the way the world ends\n    This is the way the world ends\n    Not with a bang but a whimper."
     },
     {
    	 title:"Dulce et Decorum Est",
    	 author:"Wilfred Owen",
    	 content:"Bent double, like old beggars under sacks,\nKnock-kneed, coughing like hags, we cursed through sludge,\nTill on the haunting flares we turned our backs,\nAnd towards our distant rest began to trudge.\nMen marched asleep. Many had lost their boots,\nBut limped on, blood-shod. All went lame; all blind;\nDrunk with fatigue; deaf even to the hoots\nOf gas-shells dropping softly behind.\n\nGas! GAS! Quick, boys!—An ecstasy of fumbling\nFitting the clumsy helmets just in time,\nBut someone still was yelling out and stumbling\nAnd flound’ring like a man in fire or lime.—\nDim through the misty panes and thick green light,\nAs under a green sea, I saw him drowning.\n\nIn all my dreams before my helpless sight,\nHe plunges at me, guttering, choking, drowning.\n\nIf in some smothering dreams, you too could pace\nBehind the wagon that we flung him in,\nAnd watch the white eyes writhing in his face,\nHis hanging face, like a devil’s sick of sin;\nIf you could hear, at every jolt, the blood\nCome gargling from the froth-corrupted lungs,\nObscene as cancer, bitter as the cud\nOf vile, incurable sores on innocent tongues,—\nMy friend, you would not tell with such high zest\nTo children ardent for some desperate glory,\nThe old Lie: Dulce et decorum est\nPro patria mori."
     },
     {
    	 title:"Anthem of Doomed Youth",
    	 author:"Wilfred Owen",
    	 content:"What passing-bells for these who die as cattle?\n      — Only the monstrous anger of the guns.\n      Only the stuttering rifles' rapid rattle\nCan patter out their hasty orisons.\nNo mockeries now for them; no prayers nor bells; \n      Nor any voice of mourning save the choirs,—\nThe shrill, demented choirs of wailing shells;\n      And bugles calling for them from sad shires.\n\nWhat candles may be held to speed them all?\n      Not in the hands of boys, but in their eyes\nShall shine the holy glimmers of goodbyes.\n      The pallor of girls' brows shall be their pall;\nTheir flowers the tenderness of patient minds,\nAnd each slow dusk a drawing-down of blinds."
     },
     {
    	 title:"Common Sense",
    	 author:"Thomas Paine",
    	 content:"...\nMen of passive tempers look somewhat lightly over \nthe offences of Great Britain, and, still hoping \nfor the best, are apt to call out, \"Come, come, \nwe shall be friends again for all this.\" But \nexamine the passions and feelings of mankind: \nbring the doctrine of reconciliation to the \ntouchstone of nature, and then tell me whether \nyou can hereafter love, honour, and faithfully \nserve the power that hath carried fire and sword \ninto your land? If you cannot do all these, then \nare you only deceiving yourselves, and by your \ndelay bringing ruin upon posterity. Your future \nconnection with Britain, whom you can neither \nlove nor honour, will be forced and unnatural, \nand being formed only on the plan of present \nconvenience, will in a little time fall into a \nrelapse more wretched than the first. But if you \nsay, you can still pass the violations over, then \nI ask, hath your house been burnt? Hath your \nproperty been destroyed before your face? Are \nyour wife and children destitute of a bed to lie \non, or bread to live on? Have you lost a parent \nor a child by their hands, and yourself the \nruined and wretched survivor? If you have not, \nthen are you not a judge of those who have. But \nif you have, and can still shake hands with the \nmurderers, then are you unworthy the name of \nhusband, father, friend or lover, and whatever \nmay be your rank or title in life, you have the \nheart of a coward, and the spirit of a sycophant.\n..."
     },
     {
    	 title:"How Sleep the Brave",
    	 author:"Walter de la Mare",
    	 content:"Bitterly, England must thou grieve —\nThough none of these poor men who died\nBut did within his soul believe \nThat death for thee was glorified. \n\nEver they watched it hovering near —\nA mystery beyond thought to plumb —\nAnd often, in loathing and in fear, \nThey heard cold danger whisper, Come! —\n\nHeard, and obeyed. Oh, if thou weep \nSuch courage and honour, woe, despair; \nRemember too that those who sleep \nNo more remorse can share."
     },
     {
    	 title:"The Sirens' Song",
    	 author:"William Browne",
    	 content:"STEER, hither steer your winged pines,\nAll beaten mariners!\nHere lie Love's undiscover'd mines,\nA prey to passengers--\nPerfumes far sweeter than the best\nWhich make the Phoenix' urn and nest.\nFear not your ships,\nNor any to oppose you save our lips;\nBut come on shore,\nWhere no joy dies till Love hath gotten more.\n\nFor swelling waves our panting breasts,\nWhere never storms arise,\nExchange, and be awhile our guests:\nFor stars gaze on our eyes.\nThe compass Love shall hourly sing,\nAnd as he goes about the ring,\nWe will not miss\nTo tell each point he nameth with a kiss.\n--Then come on shore,\nWhere no joy dies till Love hath gotten more."
     },
     {
    	 title:"For the Fallen",
    	 author:"Laurence Binyon",
    	 content:"With proud thanksgiving, a mother for her children,\nEngland mourns for her dead across the sea.\nFlesh of her flesh they were, spirit of her spirit,\nFallen in the cause of the free.\n\nSolemn the drums thrill: Death august and royal\nSings sorrow up into immortal spheres.\nThere is music in the midst of desolation\nAnd a glory that shines upon our tears.\n\nThey went with songs to the battle, they were young,\nStraight of limb, true of eye, steady and aglow.\nThey were staunch to the end against odds uncounted,\nThey fell with their faces to the foe.\n\nThey shall grow not old, as we that are left grow old:\nAge shall not weary them, nor the years condemn.\nAt the going down of the sun and in the morning\nWe will remember them.\n\nThey mingle not with their laughing comrades again;\nThey sit no more at familiar tables of home;\nThey have no lot in our labour of the day-time;\nThey sleep beyond England's foam.\n\nBut where our desires are and our hopes profound,\nFelt as a well-spring that is hidden from sight,\nTo the innermost heart of their own land they are known\nAs the stars are known to the Night;\n\nAs the stars that shall be bright when we are dust,\nMoving in marches upon the heavenly plain,\nAs the stars that are starry in the time of our darkness,\nTo the end, to the end, they remain."
     },
     {
    	 title:"Brahma",
    	 author:"Ralph Waldo Emerson",
    	 content:"If the red slayer think he slays,\nOr if the slain think he is slain,\nThey know not well the subtle ways\nI keep, and pass, and turn again.\n\nFar or forgot to me is near;\nShadow and sunlight are the same;\nThe vanished gods to me appear;\nAnd one to me are shame and fame.\n\nThey reckon ill who leave me out;\nWhen me they fly, I am the wings;\nI am the doubter and the doubt,\nAnd I the hymn the Brahmin sings.\n\nThe strong gods pine for my abode,\nAnd pine in vain the sacred Seven;\nBut thou, meek lover of the good!\nFind me, and turn thy back on heaven."
     },
     {
    	 title:"The Wanderers",
    	 author:"Robert Browning",
    	 content:"OVER the sea our galleys went, \nWith cleaving prows in order brave \nTo a speeding wind and a bounding wave-- \n   A gallant armament: \nEach bark built out of a forest-tree \n   Left leafy and rough as first it grew, \nAnd nail'd all over the gaping sides, \nWithin and without, with black bull-hides, \nSeethed in fat and suppled in flame, \nTo bear the playful billows' game; \nSo, each good ship was rude to see, \nRude and bare to the outward view. \n   But each upbore a stately tent \nWhere cedar pales in scented row \nKept out the flakes of the dancing brine, \nAnd an awning droop'd the mast below, \nIn fold on fold of the purple fine, \nThat neither noontide nor star-shine \nNor moonlight cold which maketh mad, \n   Might pierce the regal tenement. \nWhen the sun dawn'd, O, gay and glad \nWe set the sail and plied the oar; \nBut when the night-wind blew like breath, \nFor joy of one day's voyage more, \nWe sang together on the wide sea, \nLike men at peace on a peaceful shore; \nEach sail was loosed to the wind so free, \nEach helm made sure by the twilight star, \nAnd in a sleep as calm as death, \nWe, the voyagers from afar, \n   Lay stretch'd along, each weary crew \nIn a circle round its wondrous tent \nWhence gleam'd soft light and curl'd rich scent, \n   And with light and perfume, music too: \nSo the stars wheel'd round, and the darkness past, \nAnd at morn we started beside the mast, \nAnd still each ship was sailing fast! \n\nNow, one morn, land appear'd--a speck \nDim trembling betwixt sea and sky-- \n'Avoid it,' cried our pilot, 'check \n   The shout, restrain the eager eye!' \nBut the heaving sea was black behind \nFor many a night and many a day, \nAnd land, though but a rock, drew nigh; \nSo we broke the cedar pales away, \nLet the purple awning flap in the wind, \n   And a statue bright was on every deck! \nWe shouted, every man of us, \nAnd steer'd right into the harbour thus, \nWith pomp and paean glorious. \n\nA hundred shapes of lucid stone! \n   All day we built its shrine for each, \nA shrine of rock for ever one, \nNor paused till in the westering sun \n   We sat together on the beach \nTo sing because our task was done; \nWhen lo! what shouts and merry songs! \nWhat laughter all the distance stirs! \nA loaded raft with happy throngs \nOf gentle islanders! \n'Our isles are just at hand,' they cried, \n   'Like cloudlets faint in even sleeping; \nOur temple-gates are open'd wide, \n   Our olive-groves thick shade are keeping \nFor these majestic forms'--they cried. \nO, then we awoke with sudden start \nFrom our deep dream, and knew, too late, \nHow bare the rock, how desolate, \nWhich had received our precious freight: \n   Yet we call'd out--'Depart! \nOur gifts, once given, must here abide: \n   Our work is done; we have no heart \nTo mar our work,'--we cried. "
     },
     {
    	 title:"The Nightingale",
    	 author:"Mark Akenside",
    	 content:"To-night retired, the queen of heaven\nWith young Endymion stays;\nAnd now to Hesper it is given\nAwhile to rule the vacant sky,\nTill she shall to her lamp supply\nA stream of brighter rays.\n\nPropitious send thy golden ray,\nThou purest light above!\nLet no false flame seduce to stray\nWhere gulf or steep lie hid for harm;\nBut lead where music's healing charm\nMay soothe afflicted love.\n\nTo them, by many a grateful song\nIn happier seasons vow'd,\nThese lawns, Olympia's haunts, belong:\nOft by yon silver stream we walk'd,\nOr fix'd, while Philomela talk'd,\nBeneath yon copses stood.\n\nNor seldom, where the beechen boughs\nThat roofless tower invade, \nWe came, while her enchanting Muse\nThe radiant moon above us held:\nTill, by a clamorous owl compell'd,\nShe fled the solemn shade.\n\nBut hark! I hear her liquid tone!\nNow Hesper guide my feet!\nDown the red marl with moss o'ergrown, \nThrough yon wild thicket next the plain,\nWhose hawthorns choke the winding lane\nWhich leads to her retreat.\n\nSee the green space: on either hand\nEnlarged it spreads around:\nSee, in the midst she takes her stand,\nWhere one old oak his awful shade\nExtends o'er half the level mead,\nEnclosed in woods profound.\n\nHark! how through many a melting note\nShe now prolongs her lays:\nHow sweetly down the void they float!\nThe breeze their magic path attends;\nThe stars shine out; the forest bends;\nThe wakeful heifers graze.\n\nWhoe'er thou art whom chance may bring\nTo this sequester'd spot,\nIf then the plaintive Siren sing,\nO softly tread beneath her bower\nAnd think of Heaven's disposing power,\nOf man's uncertain lot.\n\nO think, o'er all this mortal stage\nWhat mournful scenes arise:\nWhat ruin waits on kingly rage;\nHow often virtue dwells with woe;\nHow many griefs from knowledge flow;\nHow swiftly pleasure flies!\n\nO sacred bird! let me at eve,\nThus wandering all alone,\nThy tender counsel oft receive,\nBear witness to thy pensive airs,\nAnd pity Nature's common cares,\nTill I forget my own."
     },
     {
    	 title:"On the Death of a particular Friend",
    	 author:"James Thomson",
    	 content:"AS those we love decay, we die in part,	 \nString after string is sever'd from the heart;	 \nTill loosen'd life, at last but breathing clay,	 \nWithout one pang is glad to fall away.	 \n \nUnhappy he who latest feels the blow!	         \nWhose eyes have wept o'er every friend laid low,	 \nDragg'd ling'ring on from partial death to death,	 \nTill, dying, all he can resign is—breath."
     },
     {
    	 title:"Stanza",
    	 author:"Emily Bronte",
    	 content:"Often rebuked, yet always back returning\n    To those first feelings that were born with me,\nAnd leaving busy chase of wealth and learning\n    For idle dreams of things which cannot be:\n\nTo-day, I will seek not the shadowy region;\n    Its unsustaining vastness waxes drear;\nAnd visions rising, legion after legion,\n    Bring the unreal world too strangely near.\n\nI’ll walk, but not in old heroic traces,\n    And not in paths of high morality,\nAnd not among the half-distinguished faces,\n    The clouded forms of long-past history.\n\nI’ll walk where my own nature would be leading:\n    It vexes me to choose another guide:\nWhere the gray flocks in ferny glens are feeding;\n    Where the wild wind blows on the mountain side.\n\nWhat have those lonely mountains worth revealing?\n    More glory and more grief than I can tell:\nThe earth that wakes one human heart to feeling\n    Can centre both the worlds of Heaven and Hell."
     },
     {
    	 title:"Where the Sidewalk Ends",
    	 author:"Shel Silverstein",
    	 content:"There is a place where the sidewalk ends\nand before the street begins,\nand there the grass grows soft and white,\nand there the sun burns crimson bright,\nand there the moon-bird rests from his flight\nto cool in the peppermint wind.\n\nLet us leave this place where the smoke blows black\nand the dark street winds and bends.\nPast the pits where the asphalt flowers grow\nwe shall walk with a walk that is measured and slow\nand watch where the chalk-white arrows go\nto the place where the sidewalk ends.\n\nYes we'll walk with a walk that is measured and slow,\nand we'll go where the chalk-white arrows go,\nfor the children, they mark, and the children, they know,\nthe place where the sidewalk ends. "
     }
];
