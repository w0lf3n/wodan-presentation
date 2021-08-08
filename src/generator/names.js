
const Names = {
    DRAKE: {
        MALE: "Egar,Elch,Ga’ash,Gadé Ihn,Gakré Ohm,Galeck,Galsh,Garadin,Garchin,Gark,Garlan,Garlin Ohn,Garrutin,Gart’lo,Garushi,Gashinar,Gashol,Gaushii,Gaustun,Gegchi,Gelka Kon,Gelknick,Gillan,Gisharri,Gost,Grada,Græt Ihn,Grashen,Gravlan,Grag,Grelnit,Grenn Ohn,Greth,Gribbel,Gridda,Grish,Gron Ihn,Ka,Kahn Ih,Karigan,Karri Kon,Karron,Kask,Kegrid,Kerath Ihn,Kerath Kor,Klash,Kon Garashé,Kraag,Krall Ohn,Kran Kor,Krash,Kraslar,Krenli,Kruggen,Kun,Mah Toa,Margian,Mar’Ildian,Markan,Markinos,Mar Ohn,Marra Di’lek,Marrito,Marritos,Merkush,Merritos Gark,Morusté,Murr,Omataké,Reshan,Vashitt,Velnick,Veralon,Veramo,Verath,Verditt,Verkon,Verlinn,Vermad,Vertick,Vladnir",
        FEMALE: "Alen Ka,Alinash Mal,Ashirt,Auginet Ka,Auuglann,Damell,Dell,Demla,Dinsill,Eshi,Olath,Omage,Omagrra,Orra Ka,Orridan,Orrida,Oshibi,Vallin,Valnirra,Valnitt,Velisk,Verra,Vellin Ka,Veshtar,Vushtin"
    },
    DWARVISH: {
        names: "Aigaithas,Aigaithil,Aigaithing,Aigaithol,Aigalas,Aigaling,Aigalis,Aigalol,Aigalsil,Aigatas,Aigatis,Aigatlos,Aigatsil,Aigatsol,Aigatus,Aigcatas,Aigcatil,Aigcating,Aigcatis,Aigcatsil,Aigcatsol,Aigcatus,Aigdring,Aigdris,Aigdrlos,Aigdrsil,Aigdrsol,Aigduras,Aigdurlos,Aigdursol,Aigthaing,Aigthais,Aigthasil,Aigthaus,Alaithas,Alaithis,Alaithlos,Alaithol,Alaithsol,Alaithus,Alalas,Alalil,Alalol,Alalsol,Alalus,Alatas,Alatil,Alating,Alatlos,Alatsil,Alcatil,Alcatis,Alcatlos,Alcatsil,Aldras,Aldril,Aldring,Aldris,Aldrlos,Aldrol,Aldrsol,Alduras,Aldurlos,Aldurol,Althaas,Althail,Althalos,Althaol,Althasil,Althasol,Althaus,Anaithas,Anaithil,Anaithing,Anaithis,Anaithsil,Anaithus,Analil,Anallos,Analol,Analsil,Analus,Anatas,Anating,Anatis,Anatol,Anatsol,Ancatas,Ancatil,Ancatol,Ancatus,Andril,Andris,Andrlos,Andrus,Anduril,Andurol,Andursol,Andurus,Anthaas,Anthaing,Anthais,Anthaol,Anthasil,Anthasol,Anthaus,Augaithas,Augaithing,Augaithsil,Augaithus,Augalas,Augaling,Augalol,Augating,Augatlos,Augatol,Augatsil,Augatsol,Augcatas,Augcatil,Augcatis,Augcatol,Augcatsil,Augcatus,Augdras,Augdris,Augdrsil,Augdrus,Augduras,Augduril,Augduring,Augdurol,Augdursol,Augdurus,Augthail,Augthais,Augthalos,Augthaol,Dulaithil,Dulaithing,Dulaithlos,Dulaithsil,Dulaithsol,Dulalas,Dulaling,Dulalis,Dulalsil,Dulatil,Dulating,Dulatol,Dulatsol,Dulatus,Dulcatil,Dulcating,Dulcatlos,Dulcatol,Dulcatsil,Dulcatsol,Duldril,Duldris,Duldrlos,Duldrol,Duldrsil,Duldrus,Dulduras,Dulduring,Duldursil,Duldurus,Dulthalos,Dulthasil,Dulthasol,Dulthaus,Glamaithil,Glamaithis,Glamaithol,Glamaithsol,Glamalil,Glamaling,Glamalis,Glamallos,Glamalsil,Glamalus,Glamatil,Glamatus,Glamcatas,Glamcatil,Glamcating,Glamcatsil,Glamcatus,Glamdras,Glamdril,Glamdrlos,Glamdrsol,Glamduras,Glamduril,Glamduring,Glamduris,Glamdursol,Glamthaas,Glamthaol,Glamthasil,Glamthasol,Glamthaus,Glomin,Gomaithas,Gomaithil,Gomaithol,Gomaithsol,Gomalil,Gomalis,Gomalus,Gomatas,Gomatil,Gomating,Gomatis,Gomatlos,Gomatol,Gomcatil,Gomcatis,Gomcatlos,Gomdras,Gomdril,Gomdring,Gomdris,Gomdrol,Gomdrsil,Gomduris,Gomdurlos,Gomdursil,Gomdursol,Gomdurus,Gomthaas,Gomthalos,Gomthasol,Naraithil,Naraithing,Naraithol,Naraithsil,Naraithsol,Naraithus,Naralas,Naralil,Naralsil,Naralus,Naratlos,Naratol,Naratsil,Narcating,Narcatis,Narcatol,Narcatsil,Narcatsol,Nardras,Nardril,Nardring,Nardris,Nardrol,Nardrsil,Nardrsol,Nardrus,Narduras,Narduril,Nardurol,Narthalos,Narthaol,Pelaithas,Pelaithil,Pelaithing,Pelaithis,Pelaithlos,Pelaithol,Pelaithsil,Pelaithsol,Pelalil,Pelaling,Pelalis,Pelalsil,Pelalsol,Pelalus,Pelatil,Pelating,Pelatis,Pelatol,Pelatsil,Pelatus,Pelcating,Pelcatlos,Pelcatol,Pelcatsil,Peldras,Peldril,Peldrsol,Peldrus,Pelduril,Pelduring,Pelduris,Peldurol,Peldursol,Peldurus,Pelthaas,Pelthail,Pelthasil,Trithaithas,Trithaithil,Trithaithis,Trithaithlos,Trithaithol,Trithaithsil,Trithaithsol,Trithaithus,Trithalis,Trithalol,Trithatas,Trithatil,Trithatlos,Trithatsol,Trithcatlos,Trithcatsol,Trithcatus,Trithdril,Trithdring,Trithdris,Trithdrlos,Trithdrol,Trithdrsol,Trithdrus,Trithduril,Trithduring,Trithdurlos,Trithdurol,Trithdursil,Trithdurus,Triththaas,Triththail,Triththaing,Triththasol,Triththaus"
    },
    ELVISH: {
        MALE: "Amadrieriand,Amáril,Amelad,Ameldor,Amendel,Ameng,Amilmaldur,Amilmalith,Amilmandir,Amind,Amiol,Amiorion,Amithrarion,Amóldor,Amorfimir,Amorfir,Amowyn,Amulas,Amundil,Anán,Anebrin,Anebrir,Anémbor,Anénduil,Anerion,Anilad,Anil-Gawyn,Anilmambor,Anilmariand,Anior,Anithranduil,Anol,Anon,Anorfing,Anundil,Belán,Belandil,Belarandel,Belel,Belén,Belil-Gandil,Belilmand,Belilmang,Beliondil,Beliril,Belithraldor,Belithrawyn,Belólad,Belómir,Belondel,Belyrion,Cadriembor,Cadrieriand,Cálad,Caladrielas,Calándel,Caldur,Cáldur,Calebrindel,Calebrindir,Calénduil,Calil-Gandir,Calil-Gawyn,Calioriand,Caliril,Calónduil,Caloril,Cándir,Canduil,Caraldur,Carang,Célad,Celadrieriand,Celang,Celaral,Celarandil,Celáriand,Celebririon,Celelas,Celendel,Celér,Celilmalas,Celiondir,Celior,Celiorion,Celong,Celór,Celóril,Celorion,Celundir,Celuwyn,Celyndel,Cénduil,Cindil,Ciong,Cithralad,Cithraldur,Cithrand,Cithrandel,Cithraril,Col,Corfil,Corfildur,Cówyn,Cun,Cundir,Cylas,Delán,Delánd,Delandel,Delaraldur,Deláril,Delawyn,Deléng,Delilmaldor,Deliol,Delithrar,Deliwyn,Delóldor,Delorfilad,Delorfilith,Delorion,Delundil,Eäradriendel,Eäradrier,Eäránduil,Eäraralad,Eärebrindel,Eäréldor,Eäreng,Eärérion,Eärithrandil,Eäromir,Eärorfiriand,Eäryldur,Eäryriand,Eladrieng,Elálith,Elánd,Elándil,Elebrildor,Elebrindel,Elebriril,Elélas,Elémbor,Elemir,Elen,Elil-Garil,Elilmaldur,Eliomir,Eliondil,Elolas,Elólas,Elor,Elorfilad,Elradrien,Elralith,Elran,Elreldur,Elrilmand,Elrioldor,Elriolith,Elrithralith,Elrithranduil,Elrorfir,Elval,Elvandir,Elvaramir,Elváwyn,Elvebrind,Elvebrindel,Elvélith,Elvémir,Elverion,Elvil-Garion,Elvilmaldur,Elvilmaril,Elvioldur,Elvombor,Elvónduil,Elvorfimir,Elvorfiriand,Elvorfiril,Elvóriand,Elvund,Elyldor,Elyrion,Eowambor,Eowanduil,Eowar,Eowaraldor,Eowaran,Eowarar,Eowariand,Eowarion,Eowebrind,Eowémir,Eowil-Garion,Eowimbor,Eowiomir,Eowithrawyn,Eowóldur,Eoworfildor,Eowówyn,Eowylas,Fadriendel,Fandel,Farandir,Fáwyn,Fendel,Fer,Filman,Fioril,Fithraril,Forfilas,Fyrion,Gadriendil,Gadrieng,Galadrieldor,Galálad,Galálas,Galalith,Galar,Galelas,Galeldur,Galelith,Galémbor,Galithrariand,Galoldur,Galuldur,Galur,Galurion,Gambor,Gán,Ganduil,Garaldor,Gararil,Gelad,Géril,Gil-Gandel,Gil-Gang,Giombor,Githral,Githralad,Gladriendil,Glal,Glámbor,Glandil,Glarang,Glararil,Glilmal,Glimir,Glior,Glólas,Gloldor,Glómir,Glon,Glul,Golad,Gor,Gumbor,Gyl,Gymbor,Gyn,Harariand,Háriand,Hebril,Hemir,Hénduil,Hilas,Hil-Garion,Hilmariand,Hiong,Hirion,Hithrandel,Horfilad,Horfindel,Hundel,Hymir,Hyrion,Hywyn,Isadrieng,Isándir,Isarandel,Isarar,Iselas,Isér,Isilmandel,Isirion,Isithral,Isól,Isóndel,Isóng,Isorfilad,Isorfindir,Isuwyn,Isyndel,Legal,Legaran,Legémir,Legéril,Legilad,Legil-Gal,Legiondel,Legithralith,Legorfindil,Legorfirion,Legówyn,Legyl,Legyn,Linduilas,Lómadrieril,Lómarand,Lómariand,Lómebrilad,Lómebrind,Lómémbor,Lómilmaril,Lómiriand,Lómorfindil,Lómowyn,Madrieril,Maldur,Mánduil,Maraldur,Mebrin,Méng,Mérion,Miolith,Miomir,Mithrand,Mondir,Móndir,Morfilas,Morfin,Morfiriand,Mylith,Nadrieldor,Nalith,Nán,Nél,Nil-Galas,Nil-Galith,Nil-Gar,Nilmar,Nóndel,Norfildor,Norfilith,Norfindil,Norfindir,Numbor,Nyldur,Padrieriand,Padrieril,Pamir,Paraldor,Parariand,Pilmalad,Pindir,Pór,Porfildur,Pumbor,Pyldur,Rebrir,Réndir,Rilmandil,Rithrandil,Ról,Róldor,Roldur,Róldur,Rorfilad,Rorfindil,Rówyn,Ryn,Sadrielas,Sebrin,Sebriril,Sénd,Sil-Gal,Sólad,Sorfind,Sóriand,Tadriendir,Taral,Taraldur,Táriand,Tendel,Téwyn,Thradrieriand,Thrambor,Thraral,Threbring,Thrélad,Thréldur,Thril-Gamir,Thril-Gandir,Thril-Gar,Thrilmandel,Thrimir,Thrion,Thrithran,Throlas,Thrón,Thróng,Thrund,Thryriand,Til-Gan,Tilmalad,Tilmalas,Tinandir,Tinarambor,Tinarariand,Tinén,Tinil-Ganduil,Tinilmand,Tinilmawyn,Tinimir,Tinindil,Tinithrar,Tinoldor,Tinond,Tinorfind,Tinorfiriand,Tinóriand,Tinowyn,Tinun,Tinyl,Tion,Tolas,Torfildur,Tówyn,Tylad,Unadrieldor,Unadrier,Unál,Unalas,Unálas,Unaraldur,Unaril,Unárion,Unebrin,Unebrind,Uneldor,Unil,Unil-Gan,Uniolith,Unioril,Unólith,Unombor,Unóndel,Unondir,Unorfildor,Unorfiril,Unorfiwyn,Unulad,Uradrielas,Uradrierion,Urálas,Urálith,Urambor,Urér,Uril-Gambor,Urilmalith,Uróldor,Urorfildor,Urul,Urymir,Válad,Ván,Vándel,Vandir,Varalas,Vararion,Vebril,Vebrilas,Vebrinduil,Vel,Vilith,Vol,Vólas,Vóldur,Vondel,Vorfin,Vorfindil,Vulas,Vuldur,Vunduil,Vylas,Vyldor",
        FEMALE: "Amadrielia,Amadrielindë,Amadriendra,Amadriewen,Amarang,Amebrilindë,Amedë,Améthien,Amewien,Amil-Gadith,Amil-Garith,Amilmadia,Amiolith,Amionia,Amithraniel,Amithrawien,Amiwen,Amodë,Amorfilith,Amorith,Amulia,Amuviel,Amuwen,Analia,Anang,Anaraclya,Anáthien,Anebriniel,Anilmarith,Aning,Aniorith,Anówien,Anundra,Anuthiel,Anuthien,Anylindë,Anythien,Anywien,Belaclya,Beladrielith,Beladriewen,Beladriewien,Belarania,Belaraviel,Belebrindra,Belendra,Beliolia,Belithraniel,Belithrawiel,Belithrawien,Belowen,Belulindë,Cádë,Cadriewen,Caladrieng,Calándra,Calang,Calánia,Calebriwien,Calewen,Calewiel,Calil-Galith,Calilmalith,Calithraclya,Calóniel,Calorfiniel,Calówien,Caluclya,Ceclya,Celadë,Celália,Celálindë,Celarandra,Celararith,Celárith,Celebriniel,Celebriviel,Celelith,Celéng,Celérith,Celidien,Celilith,Celindë,Celiodë,Celioniel,Celith,Celithradith,Celódith,Celorfilindë,Celorfing,Celorfiwien,Celówien,Celylia,Cethien,Cing,Cithralith,Cithrania,Cithrawen,Cólindë,Corfiviel,Cydia,Delararith,Delebrinia,Deléthien,Delil-Ganiel,Deliowen,Delithrathiel,Delóndra,Delorfilindë,Delorfithien,Deloviel,Delydien,Eäradriedien,Eärániel,Eärarawien,Eärélia,Eärenia,Eärewen,Eäréwiel,Eärilmadë,Eärilmathien,Eäriolith,Eärithrang,Eärorfiwien,Eärudë,Eladriedë,Eladrielia,Elarawiel,Elebrindra,Eledë,Elelith,Elil-Gang,Elilmalia,Elilmawien,Elithraclya,Elithradien,Elóndra,Elorfing,Elorfithien,Elradrierith,Elránia,Elrebridith,Elréthiel,Elrilindë,Elrilmandra,Elrilmathien,Elrithiel,Elrithradith,Elriwen,Elródith,Elrorfidia,Eluviel,Elvádia,Elvánia,Elvil-Gawien,Elvilmathiel,Elviniel,Elviondra,Elvithrang,Elvithrathien,Elvowien,Elvyniel,Elvyviel,Elynia,Elywen,Eowalia,Eowarawien,Eowathiel,Eowebridith,Eowedith,Eowidien,Eowil-Galindë,Eowilindë,Eowiowien,Eowylia,Eowyniel,Fadriedith,Fadrielia,Fadriendra,Fadrienia,Falindë,Fáthiel,Fathien,Fáwien,Feclya,Féthiel,Fil-Galia,Fil-Gathiel,Fil-Gawien,Filmaclya,Fioniel,Fódë,Fólindë,Fulindë,Gadrieclya,Gadrieviel,Galadriethien,Galándra,Galaraniel,Galebrilia,Galebrindra,Galédë,Galedien,Galéwiel,Galil-Gania,Galilmadia,Galiothiel,Galithrathien,Galólia,Galolindë,Galorfiwiel,Galothiel,Galowen,Galundra,Galyniel,Gathien,Gáviel,Gebririth,Gewen,Gil-Gawien,Gilia,Gioniel,Gioviel,Giowen,Githrania,Githrawiel,Glália,Glebrithien,Gléndra,Glilmadien,Glilmawiel,Glithiel,Gloclya,Glodith,Glorfilith,Gloviel,Glowiel,Goclya,Godien,Gólia,Golindë,Guviel,Harawiel,Haviel,Háwien,Héclya,Hedia,Helith,Hewen,Hil-Gania,Hiodë,Hiwien,Hodia,Hódia,Horfinia,Horfiwien,Hóthiel,Huclya,Hunia,Huthien,Hyclya,Hythiel,Hythien,Isadrieng,Isáwen,Isebridien,Isebrinia,Isendra,Iséng,Iseviel,Isil-Garith,Isilindë,Isithradë,Isithradien,Isithrarith,Isithrawiel,Isóthien,Legádë,Legadien,Legadrieclya,Legadriedë,Legadrieniel,Legaraclya,Legebrilia,Legelith,Legeng,Legéniel,Legethiel,Legidia,Legil-Galindë,Legilmadith,Legilmawiel,Legithralindë,Legithrandra,Legithrania,Legolith,Legondra,Legorfidë,Lómániel,Lómebriclya,Lómebriniel,Lómedia,Lómeniel,Lómiclya,Lómilindë,Lómilmathiel,Lómilmawiel,Lómithradë,Lómithrarith,Lómódë,Lómolith,Lómóndra,Lómorfing,Lómorith,Lómudia,Lómulindë,Lómuniel,Lómuthiel,Lómynia,Lómythien,Mádia,Madrieclya,Maraclya,Mebriwiel,Meclya,Medien,Mil-Gathiel,Mil-Gathien,Milindë,Milith,Miowen,Miowiel,Mithradë,Mithralindë,Módë,Módia,Moniel,Morfilindë,Munia,Myndra,Mywiel,Narania,Naraniel,Náviel,Nawen,Newen,Nil-Gang,Nilmadia,Niodien,Niolia,Niothien,Nithraniel,Nithrarith,Nowen,Nydith,Pádia,Padriedith,Paralindë,Parandra,Pawen,Pebridien,Pil-Gadia,Pil-Gadien,Pilindë,Pindra,Pong,Porfindra,Porfiwien,Póviel,Pulia,Puthien,Reniel,Réviel,Ril-Gawien,Rindra,Riothien,Róng,Rorfiviel,Sadrienia,Sadrierith,Sálindë,Sáng,Saradith,Sarandra,Sédith,Sendra,Sethien,Silmaclya,Silmathiel,Sioclya,Siorith,Sithrang,Sithrawen,Soniel,Sothiel,Sothien,Syniel,Tadrierith,Tang,Taradien,Tarathiel,Tathiel,Terith,Thradia,Thrália,Thraraviel,Threbriniel,Thredien,Thrérith,Thridith,Thrinia,Thrithradia,Thrithrandra,Thrithraniel,Throlith,Throng,Throthiel,Thrulith,Thruthien,Thryng,Til-Gandra,Tilmaclya,Tilmaviel,Tináclya,Tinadriethien,Tinálindë,Tinaraniel,Tinarathien,Tinawiel,Tinebrithiel,Tinerith,Tinil-Gania,Tinil-Gawiel,Tiniolith,Tinithrathiel,Tinóng,Tinorfilith,Tinorfithien,Tinudia,Tiorith,Tithrathien,Tówiel,Tuniel,Unadrieng,Unáthien,Unebridë,Unénia,Unil-Gadia,Unilmadia,Unindra,Uniodë,Uniolia,Uniong,Unionia,Unóndra,Unorfiwen,Unulindë,Unuviel,Unynia,Uraclya,Uradriedia,Uránia,Urárith,Urebriclya,Ureclya,Urilmadia,Urilmawiel,Uriolia,Urithralindë,Uruthien,Uryrith,Vadrierith,Vadrieviel,Vadriewen,Varawiel,Vebrithien,Vil-Gandra,Violindë,Viowiel,Vithrang,Vithraniel,Viwiel,Vódia,Vóng,Vorficlya,Vorfing,Vorfirith,Vorfiwiel,Vówien"
    },
    GRYPHON: {
        MALE: "Graa,Greaa,Gree,Kaaa,Kassshh,Kessshh,Korro,Kraa,Kuu,Kzaaa,Kzuuu",
        FEMALE: "Kaasa,Kayya,Keyya,Kiira,Korra"
    },
    HUMAN: {
        MALE: "Addraecyn,Addraenvan,Addraer,Addraercyn,Addraryn,Addreddry,Addredry,Addregwyn,Addrenyc,Addreoddry,Addreoddyn,Addreonyc,Addreorcyn,Addreran,Addribryn,Addriddyn,Addrocyn,Addroryn,Addrunvan,Addrurcyn,Addryllyn,Addrynvan,Aethacyn,Aethadry,Aethaec,Aethaeran,Aethaeryn,Aethagwyn,Aethanry,Aetharcyn,Aethec,Aethellyn,Aethenvan,Aetheoc,Aetheollyn,Aetheonyc,Aetheorcyn,Aethercyn,Aetherraent,Aethibryn,Aethiddry,Aethircyn,Aethobryn,Aethoddyn,Aethonnyn,Aethuc,Aethudry,Aethugwyn,Aethun,Aethunry,Aethydry,Aethynyc,Blac,Bladoc,Blaec,Blaedry,Blanry,Blebryn,Bledoc,Blemyr,Blennyn,Blenvan,Bleollyn,Blercyn,Blidd,Bliddry,Blillyn,Blinvan,Blollyn,Blubryn,Blucyn,Bludry,Blullyn,Bluran,Blybryn,Blydd,Blygwyn,Blymyr,Blyr,Bucyn,Cac,Cadry,Caebryn,Caedry,Caeran,Caercyn,Car,Carac,Caraddry,Caradoc,Caraedry,Caraennyn,Cararyn,Caredd,Careddry,Caregwyn,Caren,Careobryn,Careogwyn,Careonvan,Careorraent,Careoryn,Carercyn,Caric,Cariddry,Carocyn,Caroddyn,Caror,Caroran,Carraent,Carudoc,Carullyn,Carygwyn,Caryn,Cebryn,Cemyr,Cennyn,Ceoc,Ceoddry,Ceoddyn,Ceomyr,Ceonnyn,Ceonry,Ceoryn,Cicyn,Cin,Cinry,Coc,Convan,Corcyn,Cubryn,Cunry,Curyn,Cynyc,Cyryn,Dac,Dadd,Dadoc,Daeddry,Daedoc,Daellyn,Demyr,Denvan,Deodd,Deollyn,Deonyc,Derraent,Dibryn,Dinnyn,Dircyn,Dycyn,Dyddyn,Gaddry,Gaebryn,Gaedry,Gaercyn,Gagwyn,Gan,Gannyn,Gar,Gecyn,Geddyn,Gegwyn,Geodry,Ginvan,Glacyn,Gladoc,Glaercyn,Glarraent,Gleddry,Gleoddyn,Gleran,Gliddyn,Glillyn,Glinry,Glircyn,Gloddry,Gloddyn,Glonry,Glonvan,Glumyr,Glun,Glunry,Glunvan,Glyc,Glydd,Glydoc,Glynry,Glynvan,Glyran,Goc,Gor,Gubryn,Gudd,Gullyn,Gumyr,Gur,Gwadoc,Gwaec,Gwaeddyn,Gwan,Gweddyn,Gwegwyn,Gwellyn,Gwennyn,Gwenyc,Gweocyn,Gweodd,Gweodoc,Gweodry,Gweogwyn,Gweoran,Gwidoc,Gwilam,Gwodd,Gwoddyn,Gwollyn,Gwor,Gwucyn,Gwudoc,Gwumyr,Gwuran,Gwybryn,Gwycyn,Gwyddry,Gwydoc,Gwymyr,Gwynnyn,Gydoc,Gyllyn,Gymyr,Haldar,Labryn,Ladoc,Laellyn,Lan,Lannyn,Laran,Lec,Lemyr,Lenvan,Leogwyn,Lercyn,Ligwyn,Lin,Liryn,Lonnyn,Lorraent,Luddry,Ludoc,Lunnyn,Lunvan,Lurraent,Mac,Maddyn,Maennyn,Manry,Manyc,Marcyn,Mec,Menvan,Meollyn,Meon,Meonnyn,Meorraent,Middry,Midry,Mimyr,Modd,Moddry,Monry,Moran,Morcyn,Mubryn,Mudoc,Mugwyn,Murcyn,Mydoc,Mygwyn,Myn,Myrraent,Owac,Owadd,Owaddyn,Owaecyn,Owaedry,Owain,Owarcyn,Owaryn,Owecyn,Owedry,Oweomyr,Oweor,Oweorcyn,Oweran,Owercyn,Owidry,Owinvan,Owinyc,Owodd,Owoddry,Owogwyn,Owollyn,Oworan,Oworcyn,Oworraent,Owuddry,Owuddyn,Owugwyn,Owur,Owyran,Rabryn,Radd,Ranvan,Rar,Reoddyn,Reodry,Rhaecyn,Rhaedoc,Rhaemyr,Rhaerraent,Rhanry,Rharcyn,Rhenry,Rhenvan,Rhenyc,Rheodd,Rheoddyn,Rheollyn,Rheor,Rheoran,Rheorraent,Rheran,Rherraent,Rhobryn,Rhodry,Rhollyn,Rhonvan,Rhubryn,Rhugwyn,Rhunyc,Rhur,Rhygwyn,Rhyllyn,Rhynyc,Rhyrcyn,Rhyrraent,Rocyn,Roddyn,Romyr,Ron,Ronry,Rubryn,Ruddry,Rumyr,Run,Rurcyn,Rybryn,Rycyn,Ryddry,Rygwyn,Rynnyn,Rynry,Saec,Saellyn,Saemyr,Saenvan,Saercyn,Sanyc,Saran,Sarraent,Secyn,Seddyn,Sedry,Sellyn,Sennyn,Seoddry,Seorcyn,Sercyn,Siddry,Simyr,Siryn,Sodd,Sodry,Soran,Suc,Sudd,Surcyn,Sydd,Syran,Syryn,Tabryn,Taec,Taedd,Taedoc,Taemyr,Taenvan,Taercyn,Tanry,Tarcyn,Teddyn,Tegwyn,Ten,Tennyn,Tenvan,Teobryn,Teoddyn,Teor,Teorcyn,Terraent,Tinry,Tinvan,Tiryn,Todd,Tudd,Tuddry,Tudoc,Tunvan,Turraent,Tyddyn,Vaddyn,Vaeddyn,Vaedry,Vaennyn,Varcyn,Ven,Vennyn,Veocyn,Veoddyn,Veodry,Veogwyn,Veomyr,Vinvan,Vinyc,Virraent,Vobryn,Vogwyn,Vonry,Vuddyn,Vugwyn,Vyc,Vygwyn,Vyrcyn,Yracyn,Yraec,Yran,Yrannyn,Yranvan,Yraryn,Yredd,Yreddyn,Yregwyn,Yreryn,Yrinvan,Yrirraent,Yroddry,Yrullyn,Yrumyr,Yrunnyn,Yrunvan,Yryllyn,Yrymyr,Yrynyc,Yryrcyn",
        FEMALE: "Alabrylla,Alaebrylla,Alaeniver,Alalla,Alalonna,Alaryan,Aleacla,Aleaniver,Aleara,Alearka,Alena,Alengwen,Alilonna,Alingwen,Alolla,Alolonna,Alora,Alubrylla,Aluniver,Aluryan,Alussa,Alwcla,Alwllyra,Alwlyan,Alwna,Alybrylla,Alynoic,Alyra,Alyryan,Braedda,Brassa,Bravyan,Breabrylla,Breall,Brealla,Brealonna,Breana,Brell,Brellyra,Brera,Brerka,Breryan,Bricla,Brirka,Brobrylla,Brollyra,Brona,Bronoic,Brora,Brorka,Brungwen,Bruryan,Brwra,Brycla,Brynoic,Caella,Caena,Caengwen,Caevyan,Call,Calla,Cassa,Cealonna,Cera,Ceryan,Cibrylla,Cicla,Cinoic,Cira,Cissa,Clacla,Claella,Claelyan,Claenoic,Clalla,Clallyra,Clara,Clarka,Clavyan,Cleacla,Cleall,Clealyan,Cleana,Cleanoic,Clenoic,Clibrylla,Clill,Clillyra,Clilyan,Clinoic,Clissa,Clobrylla,Clollyra,Clona,Clongwen,Clungwen,Clurka,Cluvyan,Clwdda,Clwlla,Clwvyan,Clydda,Clylla,Cora,Coryan,Cucla,Cudda,Curyan,Cwdda,Cwlonna,Cwngwen,Cwvyan,Cydda,Cylla,Cyllyra,Cylyan,Cyniver,Cyvyan,Daedda,Daelyan,Daengwen,Daenoic,Dalla,Dallyra,Dangwen,Dara,Dassa,Deanoic,Deassa,Della,Devyan,Dicla,Diniver,Dissa,Dollyra,Dullyra,Dulonna,Dwbrylla,Dwdda,Dwna,Dwnoic,Dwra,Dybrylla,Dydda,Dyssa,Elacla,Elaedda,Elaell,Elaelonna,Elaessa,Elaevyan,Elallyra,Elalonna,Elara,Elavyan,Elealla,Eleanoic,Elearka,Elenoic,Elerka,Elivyan,Elulonna,Elurka,Elwllyra,Elwlonna,Elwngwen,Elwra,Elycla,Elyllyra,Elyngwen,Elyniver,Elyrka,Gwaera,Gwaessa,Gwangwen,Gweacla,Gwedda,Gwerka,Gwicla,Gwirka,Gwobrylla,Gwoll,Gwona,Gwongwen,Gwonoic,Gworyan,Gwullyra,Gwussa,Gwwcla,Gwwna,Gwwvyan,Gwycla,Gwydda,Heldra,Jacla,Jaena,Jaerka,Jaevyan,Jalyan,Jana,Jarka,Jassa,Jeabrylla,Jealla,Jeanoic,Jeniver,Jiryan,Jissa,Joll,Jolla,Jona,Jongwen,Jonoic,Jora,Jorka,Jovyan,Judda,Jull,Julonna,Jura,Jwll,Jwlyan,Jycla,Jyniver,Jynoic,Jyrka,Jyvyan,Laeniver,Laenoic,Laeryan,Langwen,Larka,Lassa,Lealonna,Lealyan,Ledda,Lelonna,Lelyan,Lengwen,Lerka,Lessa,Lidda,Lill,Lina,Lirka,Liryan,Livyan,Locla,Lodda,Lollyra,Lolonna,Lulla,Lulyan,Lungwen,Lunoic,Luryan,Lwcla,Lwlla,Lwnoic,Lwryan,Lycla,Lylla,Lylyan,Lyna,Lynoic,Maecla,Maeniver,Mavyan,Meacla,Mealyan,Meana,Meangwen,Meanoic,Medda,Melonna,Mengwen,Meniver,Meradda,Meraecla,Meraelyan,Merall,Merallyra,Meralonna,Merana,Meranoic,Merealonna,Mereangwen,Mereaniver,Merebrylla,Merella,Merengwen,Meressa,Merilyan,Merina,Merinoic,Merissa,Merivyan,Merolla,Merolyan,Merona,Meroniver,Merubrylla,Merudda,Merurka,Merwlla,Merwnoic,Merwryan,Merydda,Merylyan,Messa,Milonna,Molyan,Moniver,Mossa,Mudda,Mullyra,Mulyan,Muryan,Mwbrylla,Mwlyan,Mwngwen,Mwnoic,Mycla,Myll,Mylla,Myra,Myvyan,Nabrylla,Naebrylla,Naecla,Naell,Nalyan,Nangwen,Nealla,Neallyra,Nealonna,Neavyan,Nera,Nessa,Ninoic,Niryan,Nivyan,Nobrylla,Nolla,Nonoic,Norka,Noryan,Nucla,Nulla,Nulyan,Nungwen,Nuvyan,Nwllyra,Nwryan,Nwvyan,Nybrylla,Nyll,Nylyan,Nyryan,Nyssa,Nyvyan,Raebrylla,Raera,Raerka,Ralonna,Rara,Rarka,Rassa,Reacla,Realla,Reana,Reangwen,Rella,Relyan,Rengwen,Rerka,Revyan,Rilonna,Rilyan,Rirka,Rora,Rucla,Ruryan,Rwdda,Rwlla,Rwllyra,Rwlonna,Rwngwen,Rybrylla,Ryna,Ryngwen,Saell,Saellyra,Saeniver,Saerka,Saessa,Sallyra,Sanoic,Sara,Sassa,Searka,Sena,Senoic,Sera,Silonna,Sira,Siryan,Sona,Sorka,Subrylla,Sull,Sulonna,Sulyan,Sura,Sussa,Swlla,Swlyan,Swngwen,Swnoic,Swvyan,Syllyra,Sylyan,Syssa,Ysacla,Ysaenoic,Ysaerka,Ysanoic,Yseacla,Ysealonna,Ysealyan,Ysedda,Ysell,Yselonna,Ysilyan,Ysinoic,Ysodda,Ysongwen,Ysonoic,Ysura,Yswniver,Ysycla,Ysylla,Ysylyan,Ysyrka,Ysyssa"
    },
    KHALIFATE: {
        MALE: "Aban,Abbas,Abbud,Abdul-ʿAdl,Abdul-Ahad,Abdul-Alim,Abdul-Aliyy,Abdul-Azim,Abdul-Aziz,Abdul-Badi,Abdul-Baʿith,Abdul-Baqi,Abdul-Bari,Abdul-Barr,Abdul-Basir,Abdul-Basit,Abdul-Fattah,Abdul-Ghaffar,Abdul-Ghafur,Abdul-Ghani,Abdul-Hadi,Abdul-Hafiz,Abdul-Hakam,Abdul-Hakim,Abdul-Halim,Abdul-Hamid,Abdul-Haqq,Abdul-Hasib,Abdul-Hayy,Abdul-Jabbar,Abdul-Jalil,Abdul-Karim,Abdul-Khabir,Abdul-Khaliq,Abdul-Latif,Abdul-Malik,Abdul-Majid,Abdul-Matin,Abdul-Mubdiʾ,Abdul-Mughni,Abdul-Muhaimin,Abdul-Muhsi,Abdul-Muhyi,Abdul-Muʿid,Abdul-Muʿizz,Abdul-Mujib,Abdul-Mumin,Abdul-Muqaddim,Abdul-Muqtadir,Abdul-Musawwir,Abdul-Mutaʿal,Abdul-Nafi,Abdul-Nasser,Abdul-Nasir,Abdul-Nur,Abdul-Qadir,Abdul-Qahhar,Abdul-Qawi,Abdul-Qayyum,Abdul-Quddus,Abdul-Rafi,Abdul-Rahim,Abdul-Rahman,Abdul-Rashid,Abdul-Raʿuf,Abdul-Razzaq,Abdul-Shakur,Abdul-Tawwab,Abdul-Wadud,Abdul-Wahhab,Abdul-Wahid,Abdul-Wajid,Abdul-Wakil,Abdul-Wali,Abdul-Waliy,Abdul-Warith,Abdul-Zahir,Abdullah,ʿAbid,ʿAbidin,Abu Bakr,Aby al-Khayr,Adil,Adham,Adib,ʿAdli,ʿAdnan,ʿAfif,Ahmad,ʿAjib,ʿAkif,Akil,Akram,Alaʾ,Alaʾ al-Din,Alʿ Abbas,Aladdin,al-Bara,al-Hakam,al-Harith,Alhasan,Alhusain,Ali,Alim,Almahdi,al-Safi,Altaf,Altair,al-Tayyib,al-Tijani,al-Tufail,Amid,ʿAmid,Amin,Amir,ʿAmir,Amjad,ʿAmmar,ʿAmro,Anas,Anis,ʿAntarah,Anwar,ʿAqil,Arfan,Arif,ʿArif,Asad,Asʿad,Asadel,Ashraf,Asif,ʿAsim,Aswad,Ataʿ,Ataʿ Allah,Ataʿ al-Rahman,Athil,Athir,ʿAtif,ʿAwad,ʿAwf,Aws,Awwab,Ayham,Ayman,Ayser,Ayyub,Aza,ʿAzab,Azhar,Azim,ʿAziz,ʿAzzam,Badi,Badi al-Zaman,Badr,Badr al-Din,Badri,Bahaʿ,Bahiyy al-Din,Bahij,Bahir,Bakr,Bakri,Baligh,Bandar,Barakah,Barir,Bashshar,Basil,Basim,Bassam,Bayezid,Bayhas,Bilal,Bishr,Boulos,Budail,Burhan,Bushr,Butrus,Dabir,Dani,Darwish,Daʿud,Dhakir,Dhakiy,Dhakwan,Dhul Fiqar,Dirar,Diya,Diya al-Din,Duqaq,Fadi,Fadil,Fadl,Fadl Allah,Fahd,Fahad,Fahmi,Faisal,Faʿiz,Fakhir,Fakhr al-Din,Fakhri,Fakih,Falah,Falih,Faraj,Farhan,Farid,Fariq,Fariq,Faris,Faruq,Fath,Fathi,Fatih,Fatin,Fawwaz,Fawzan,Fawzi,Fayyad,Ferran,Fida,Fikri,Firas,Fuʿad,Fudail,Gamal,Ghayth,Ghali,Ghalib,Ghanim,Ghassan,Ghawth,Ghazwan,Ghiyath,Habbab,Habib,Haddad,Hadi,Hafiz,Hakem,Hakim,Halim,Hamal,Hamas,Hamdan,Hamdi,Hamid,Hamim,Hamzah,Hana,Hanaʾi,Hanbal,Hani,Hanif,Hannad,Haris,Harith,Harun,Hashim,Hassan,Hatim,Haydar,Haytham,Hayyan,Hazim,Hilal,Hilmi,Hisham,Hud,Hudad,Hudhafah,Hudhayfah,Humam,Hussein,Husam,Husam al-Din,Ibrahim,ʿId,Idris,Ihsan,Ihtisham,ʿIkrimah,Ilias,ʿImad,Imad al-Din,Imran,Imtiyaz,Inʿam,Iqbal,ʿIrfan,ʿIsa,ʿIsam,Ishaq,Ismaʿil,Iyad,Iyas,Izz al-Din,Jabbar,Jabr,Jabir,Jad Allah,Jaʿfar,Jal,Jalal,Jalal al-Din,Jalil,Jamal,Jamal al-Din,Jamil,Jarir,Jasim,Jaul,Jaun,Jawad,Jawdah,Jawhar,Jibran,Jibril,Jubair,Jul,Jumah,Junayd,Juwain,Kadar,Kadin,Kadir,Kahil,Kaliq,Kamal,Kamil,Karam,Kardal,Karif,Karim,Kasib,Kasim,Katib,Kazim,Khalaf,Khaldun,Khalid,Khalil,Khalil al-Allah,Khalis,Khatib,Khair al-Din,Khairi,Khoury,Khulus,Khuzaymah,Kutaiba,Labib,Lablab,Latif,Layth,LuʿayLubayd,Luqman,Lut,Lutfi,Maʿd,Madani,Mahbub,Mahdi,Mahfuz,Mahir,Mahjub,Mahmud,Mahrus,Maimun,Majd,Majdy,Majd al-Din,Majid,Makin,Malik,Mamduh,Maʿmun,Maʿin,Mandhur,Mansur,Marghub,Marid,Maʿruf,Marwan,Marzuq,Mashʿal,Mashhur,Masrur,Masʿud,Masun,Maysarah,Mazhar,Mazin,Mehmed,Mihran,Mihyar,Mikaʾil,Miqdad,Misbah,Mishʿal,Miyaz,Muʾadh,Muʾawiyah,Muʾayyad,Mubarak,Mubin,Mudar,Muddaththir,Mufid,Muflih,Muhab,Muhayr,Muhammad,Muhanna,Muhannad,Muhib,Muhibb,Muhsin,Muhtadi,Muhyi al-Din,Muʿin,Muʿizz,Mujab,Mujahid,Mukarram,Mukhlis,Mukhtar,Mulham,Mulhim,Muʿmmar,Muʿmin,Mumtaz,Munahid,Mundhir,Munib,Munif,Munir,Muʿnis,Munjid,Munsif,Muntasir,Murad,Murid,Murshid,Murtada,Musa,Musʿab,Musaʿid,Mushtaq,Muslih,Muslim,Mutafa,Mutaʾ,Muʿtasim,Mutawalli,Muʿtazz,Muthanna,Muti,Muwaffaq,Muyassar,Muzaffar,Mussammil,Nabhan,Nabighah,Nabih,Nabil,Nadhir,Nadim,Nadir,Nafiʾ,Nahid,Naʾil,Naʾim,Naji,Najib,Najid,Najjar,Najm al-Din,Naʿaman,Namir,Nashʿah,Nashʿat,Nashwan,Nasib,Nasih,Nasim,Nasir,Nasir al-Din,Nasr,Nasri,Nasuh,Nawaf,Nawfal,Nayif,Nazih,Nazim,Nazmi,Nibras,Nidal,Nijad,Nimr,Nizar,Nuʿaym,Nuh,Nuhayd,Numair,Nuʿman,Nur al-Din,Nuri,Nusrah,Nusrat,Omar,Orhan,Osman,Qasim,Qays,Qudamah,Qusay,Qatadah,Qutaybah,Qutb,Qutuz,Rabah,Rabi,Radi,Rafi,Rafid,Rafiq,Raghib,Rahman,Raʿid,Raʿif,Rais,Rajaa,Rajab,Raji,Rajih,Rakin,Rami,Ramih,Ramiz,Ramzi,Rani,Rashad,Rashid,Rasil,Rasin,Rasmi,Rasul,Ratib,Raʿuf,Rayhan,Rayyan,Razin,Ridha,Ridwan,Rihab,Riyad,Rizq,Ruhi,Rushd,Rushdi,Ruwayd,Saad,Saʿadah,Sab,Sabih,Sabir,Sabri,Saʿd,Saʿd al-Din,Sadad,Sadid,Sadiq,Saʿdun,Saʿid,Safi,Safiy,Safiy al-Din,Safuh,Safwah,Safwat,Safwan,Sahib,Sahir,Sahl,Saʾib,Saif,Saif al-Din,Sajid,Sajjad,Sakhr,Salah,Salah al-Din,Salamah,Salih,Salim,Salman,Sami,Samih,Samir,Samman,Saqr,Sariyah,Sati,Saud,Sayyid,Shaʿban,Shadi,Shadin,Shafi,Shafiq,Shahid,Shahin,Shahir,Shakib,Shakir,Shams al-Din,Shamal,Shamil,Shamim,Sharaf,Sharif,Shawqi,Shihab,Shihab al-Din,Shihad,Shuʿayb,Shukri,Shumayl,Siddiq,Sinan,Siraj,Siraj al-Din,Sofian,Subhi,Sufyan,Suhayb,Suhayl,Suhaym,Sulaiman,Sumrah,Suraqah,Suʿud,Tahir,Tahsin,Taym Allah,Taj,Taj al-Din,Talal,Talib,Tamim,Tamir,Tamam,Tammam,Taqiy,Tarif,Tariq,Taslim,Tawfiq,Tawhid,Taymullah,Taysir,Tayyib,Thabit,Thamir,Thaqib,Thawab,Thawban,ʿUbaidah,Ubaid,Ubayy,ʿUdayl,ʿUday,ʿUmar,Umarah,Umair,ʾaUrwah,Usaym,Usama,ʿUtbah,Uthal,Uthman,Waddah,Wadi,Wadid,Wafiq,Wahab,Wahhab,Wahid,Waʾil,Wajdi,Wajid,Wajih,Wakil,Walid,Walif,Waliy Allah,Waliy al-Din,Waqar,Waqqas,Ward,Wasif,Wasil,Wasim,Wazir,Yahya,Yaman,Yaʿqub,Yasar,Yasin,Yasir,Yazan,Yazid,Yunus,Yushua,Yusri,Yusuf,Zafar,Zafir,Zahid,Zahir,Zayd,Zaim,Zayn,Zarif,Zakarriya,Zaki,Zakwan,Ziyad,Zubayr,Zuhayr"
    },
    LIZARD: {
        MALE: "Amprixta,Anexir,Anitraz,Arix,Axiz,Bzz’Kza,Chamil,Cleezi,Clezz,Fazzis,Fizztrax,Flixta,Flizzil,Frikes,Frizzle,Hasz,Heffez,Hertrazzir,Hesz,Hezzir,Hezzis,Hix,Inexis,Irix,Jezzix,Jizz,Kaliez,Kepzs,Kernix,Kersezz,Kertrasz,Kerx,Kerxenix,Kezz,Klexaz,Klezyx,Krarax,Krenarex,Krex,Krinex,Krisess,Laizix,Lazki,Lixeez,Merax,Mexiss,Moxanzz,Naxisz,Nix,Pekzs,Plaxis,Plesix,Presch,Sailik,Salanix,Salik,Sandix,Saprazz,Satras,Skalix,Skandix,Skazix,Skeely,Skeezix,Sklizle,Skrez,Slizilx,Sprizz,Ssexur,Ssizer,Ssorix,Sszasz,Sterizz,Talerez,Tarex,Tarnix,Tezzaz,Tirasch,Tirax,Tirix,Trezz,Venezz,Vriss,Waks,Xaffrasz,Xartrez,Xasz,Xaztex,Xerxix,Xirasz,Xirr,Xirtras,Xirtrez,Xirz,Zandler,Zedrix,Zilrix,Zizzasz,Zslap,Zzalkz,Zzupde"
    },
    MERMAN: {
        MALE: "Absu,Abzu,Aigaion,Alastyn,Apalala,Apam,Apsu,Aremata,Atlahua,Atlaua,Barinthus,Dhakhan,Dylan,Elcmar,Ember,Enki,Faro,Habaek,Ikatere,Jamm,Jin,Kinilau,Kulullu,Labuna,Laut,Lir,Llyr,Ludd,Makara,Maui,Melicertes,Mimir,Natat,Nechtan,Neptune,Nereus,Nethuns,Njord,Nuada,Nudd,Nudimmud,Nun,Oceanus,Okeanos,Phorcys,Pontus,Popoa,Poseidon,Proteus,Raja,Rau,Rorua,Ryujin,Scylla,Sinilau,Sisiutl,Tagaloa,Tanaoa,Tangaloa,Tangaroa,Thaumas,Tikitiki,Tini,Tinilau,Tinirau,Toniwha,Triton,Vizi,Vodnik,Vourukasa",
        FEMALE: "Aglaopheme,Amphitrite,Aphrodite,Ariel,Atargatis,Calypso,Delphine,Derceto,Diktynna,Electra,Galatea,Himeropa,Jengu,Leucosia,Ligia,Lori Lamaris,Mama Wata,Marina,Miranda,Miriam,Molpe,Parthenope,Pelagia,Pisinoe,Rân,Sedna,Stella Maris,Thelxiepia,Tirgata,Vatea,Ved-Ava,Veen emo,Vete-ema"
    },
    NAGA: {
        MALE: "Abraxas,Aleiss,Amail,Axmail,Blanal,Bleii,Blo,Bress,Briss,Gaxmol,Griam,Griss,Grissileii,Hailoss,Hainoss,Harxos,Huzel,Inaloss,Ineii,Issal,Klezel,Kras,Krezkps,Kzap,Lamaiss,Lameii,Lexpek,Liness,Lobor,Maissol,Malinos,Milbor,Mileii,Nildloss,Oxpeii,Poniaz,Psell,Pson,Pzakp,Reii,Sassal,Saxil,Saxrireii,Sekol,Silas,Skell,Skepz,Slell,Snol,Soill,Sorkol,Srell,Trixoz,Vilail,Vissal,Vlanis,Xabrak,Xamalel,Xinas,Xnamos,Xopkon,Zalsp,Zlek,Zpsek,Zsekp",
        FEMALE: "Aliasse,Amailis,Axmailia,Blai,Blanalai,Bli,Bliana,Brassas,Brissal,Gaxmail,Griama,Grissa,Grissilai,Haila,Haina,Harxias,Huzi,Inai,Inalai,Issalai,Klez,Kras,Krezkps,Kzap,Lamai,Lamaissa,Lexpek,Liabra,Lilin,Linassa,Maissa,Malina,Mila,Milbra,Nildlasi,Oxpel,Poniazal,Psal,Psen,Pzakp,Riaa,Sall,Sassalia,Saxiala,Saxririaa,Sek,Skal,Skepz,Sla,Snelia,Srak,Sral,Szak,Trixzed,Vilaila,Vissalai,Vlanissa,Xabrak,Xamalia,Xina,Xinasia,Xnamas,Xopkne,Zalsp,Zlek,Zpsek,Zsekp"
    },
    OGRE: {
        MALE: "Akoark,Akort,Akzalk,Arkarm,Barkuk,Blokkar,Borkuk,Bukkak,Bulruk,Corkkar,Delkkak,Garkuk,Gnukk,Goruk,Grak,Gurk,Gurm,Kalknix,Karak,Karbuk,Kargnak,Karterak,Kayrak,Kelkrar,Kerta,Kilkrar,Kingrok,Kirk,Klud,Kokkan,Kolk,Komak,Korgnak,Kork,Koruck,Kramak,Krog,Krukrak,Krumuk,Kuknuk,Kurkur,Kurmak,Makron,Markaak,Markuk,Merknik,Nargak,Olk,Orkut,Reknak,Takolak,Trabuk,Trakkon,Urkar,Urkark"
    },
    ORCISH: {
        MALE: "Badush,Bagar,Bagdish,Barag,Barbag,Bart,Bashnak,Bidish,Bidush,Bik,Bilg,Bilo,Binak,Bink,Biol,Birt,Bogar,Bogdish,Bogdush,Bogor,Bok,Bolg,Bong,Borg,Bork,Bort,Boshnak,Budush,Bugdish,Buk,Bunak,Bung,Bunk,Burag,Burg,Burk,Buurk,Eradash,Eradish,Eragdish,Eragdush,Eragor,Eranak,Erang,Erarag,Erarg,Erart,Erigdush,Erik,Erinak,Eriol,Erirag,Erirbag,Erirg,Erirt,Erishnak,Eriurk,Erogdish,Erogdush,Erok,Erong,Eronk,Erorbag,Erudish,Erudush,Erugar,Erugdush,Erulo,Erunk,Eruol,Erurag,Eruurk,Gadash,Gagar,Gagdush,Gagor,Galo,Ganak,Gank,Gaol,Garag,Gashnak,Gigor,Ginak,Ging,Gink,Girt,Gogdish,Gogdush,Gong,Gork,Gort,Goshnak,Gradash,Gragar,Gragor,Grak,Gralg,Gralo,Granak,Graol,Grarbag,Gridash,Gridish,Gridush,Grigar,Grigor,Grilg,Grilo,Grink,Grirag,Grirg,Grirk,Grishnak,Grodish,Grogar,Grogdish,Grok,Grolg,Grong,Gronk,Grorag,Grorg,Grork,Grort,Groshnak,Grudash,Grugar,Grugdish,Grugdush,Gruk,Grulo,Grunk,Gruol,Grurg,Grurk,Grurt,Gruurk,Gugdish,Gugdush,Gulg,Gulo,Gunak,Gurbag,Gurt,Gushnak,Hadash,Hadish,Hadush,Hagar,Hagdush,Hagor,Hak,Halg,Hank,Hashnak,Hidash,Hidish,Hidush,Higdush,Hilg,Hinak,Hing,Hink,Hiol,Hirag,Hirg,Hodush,Hogar,Hogor,Hong,Hool,Horbag,Hork,Hort,Hoshnak,Hudash,Hudish,Hugor,Huk,Hulg,Hulo,Hunk,Huol,Hurag,Hurbag,Hurk,Hushnak,Huurk,Pagdish,Pagor,Palg,Palo,Paol,Parag,Pashnak,Pidush,Pigdish,Pigdush,Pilg,Pinak,Pink,Pirbag,Podash,Podish,Podush,Pogdish,Polg,Porbag,Porg,Pork,Port,Poshnak,Pradish,Pragdush,Pragor,Pralg,Pralo,Prang,Praol,Prarag,Prarbag,Prarg,Prark,Prart,Prashnak,Praurk,Pridish,Prigar,Prigdish,Prigor,Prilg,Prilo,Prinak,Priol,Prirbag,Prirg,Prirt,Priurk,Prodash,Prodish,Prodush,Prolg,Prolo,Pronak,Prong,Pronk,Prool,Prourk,Prudish,Prugar,Prugdish,Pruk,Prunak,Prunk,Prurg,Prurk,Pruurk,Puk,Pulg,Pulo,Punak,Pung,Punk,Purag,Purbag,Purg,Puurk,Radash,Ragar,Ragdish,Rak,Rang,Rank,Raol,Rarag,Rarbag,Rark,Rashnak,Raurk,Rigor,Rik,Rilg,Rinak,Rink,Rirg,Rirk,Rodish,Rodush,Rogdish,Rok,Rolo,Ronak,Rudash,Rugar,Rugdish,Ruk,Rung,Ruol,Rurag,Rushnak,Vadash,Vadish,Vadush,Vak,Valo,Vank,Varag,Varbag,Vigar,Vigdish,Vigor,Vilg,Vilo,Vink,Virag,Virt,Vishnak,Vogdish,Vogor,Vonak,Vong,Vorg,Vork,Voshnak,Vourk,Vradash,Vragar,Vragdush,Vragor,Vralo,Vrang,Vrarbag,Vrarg,Vrart,Vraurk,Vridash,Vridish,Vrigor,Vrik,Vrinak,Vring,Vrirt,Vrishnak,Vriurk,Vrodash,Vrodish,Vrogar,Vrogor,Vrolo,Vrong,Vrorg,Vrork,Vrudish,Vrugdush,Vrulg,Vrung,Vruol,Vrurg,Vrurt,Vruurk,Vudish,Vuk,Vulg,Vulo,Vunak,Vurag,Vurbag,Vurg,Vushnak"
    },
    TROLL: {
        MALE: "Äg,Agh,Bog Äh,Borb,Brag,Brag Goh,Brok,Dak,Drog,Frok,Ga,Gah,Gark,Gnarf,Grar,Grokk,Grumph,Gulk,Hak,Hask,Hoth,Hug Bah,Hu Kah,Kak,Krak,Krug,Kub,Kuh,Lok,Luk,Nak,Nuk Kar,Pag,Reck,Rok,Ruk,Sark,Shak,Shuf,Stuh,Targ,Thog,Thruf,Thur,Tohg,Torg,Trok,Tsok,Tuh,Tuk Ruh,Ugg,Üh,Urg,Urgh,Urk,Vak,Zog,Zuug"
    },
    WOSE: {
        MALE: "Bludebalmen,Boladrumbadrum,Bolwuldelman,Bombempomgontor,Bomtanbomkenton,Bomtanbomtonum,Bregalad,Bremdebubde,Brenbasnudnem,Brendumadoak,Brommantendronnor,Brumbendublun,Brumennarunom,Brummdlebroak,Bumbadadabum,Buomdumdenlol,Carnimirië,Dabumdabumtam,Dammantongonnur,Danmonlulbam,Debundbemun,Delmduelmdelom,Diblembumnde,Dolmannumbil,Drongnoblemdu,Dulmandarook,Dulwulmendom,Dumdumdumatum,Elmaroomadrum,Grelmadrumbumadum,Gulladroamadoak,Gumabeladrelm,Laffalialomdium,Landunwonbam,Lassemista,Lefnublemdde,Libleddnumm,Lolmandindel,Monlamwimdan,Muldondindal,Mundionalafla,Mundumblemdum,Munnamdulbon,Nanmildaldum,Nunmaldildun,Orofarnië,Pambedrumne,Pomtamkomtrobum,Rithramcamhan,Tantondernintan,Temtundembenn,Temtunnongetem,Tondenkontenkon,Troombadoom,Tumtentantarun,Tumtonnongatum,Tumtumgamtomtom,Wonrunmaldin,Wudadoonopl"
    },
    VILLAGE: {
        VOWELS: "a,e,i,o,u",
        BINDINGS: "h,l,n,r",
        CONSONANTS: "b,c,d,f,g,h,j,k,l,m,n,p,q,r,s,t,v,w,x,y,z",
        PARTS: "ay,ark,bane,bank,bor,burgh,burn,bury,crest,den,do,don,ey,fax,fen,fex,ford,go,ham,ia,ing,leigh,lo,mond,mont,more,mouth,nix,phis,pine,rough,shire,son,ster,to,tol,ton,tone,vil,wich,wick,worth,y",
        ENDS: "bay,bridge,castle,cliff,creek,cross,dale,end,fall,field,fort,gate,harbour,hill,land,polis,pool,port,side,town,ville,water,wood"
    }
};


export {Names};
