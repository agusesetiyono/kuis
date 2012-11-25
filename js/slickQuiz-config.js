// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Kuis untuk Offering-B",
        "main":    "<p>Pilih jawaban yang benar saja. Kuis ini tidak berhadiah. tapi akan menunjukkan seberapa tahu kamu tentang kelas kita.</p>",
        "results": "<h5></h5><p>by: <a href='http://learning.asiknya.org'>agusesetiyono</a></p>",
        "level1":  "Selamat, Anda 100% warga Off-B!",
        "level2":  "Off-B 80%",
        "level3":  "Off-B, tapi tidak banyak tau tentang Off-B",
        "level4":  "Diragukan Off-B atau bukan??",
        "level5":  "Sangat diragukan Off-B atau bukan??" // no comma here
    },
    "questions": [
        { // Question 1
            "q": "Kuliah dimana gan?",
            "a": [
                {"option": "UM",     			 "correct": true},
                {"option": "Teknik elektro",     "correct": false},
                {"option": "Pend.informatika",   "correct": false},
                {"option": "Malu jawabnya gan.", "correct": false} // no comma here
            ],
            "correct": "<p><span>Pinter!</span>Kampus kita tercinta bernama UM!</p>",
            "incorrect": "<p><span>oh No!</span>Liat KTM dulu ya!</p>" // no comma here
        },
        { // Question 2
            "q": "Semester berapa sekarang?",
            "a": [
                {"option": "Satu",    "correct": false},
                {"option": "Dua",     "correct": false},
                {"option": "Tiga",    "correct": false},
                {"option": "Tujuh",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Yap!</span>Semester Tua. haha</p>",
            "incorrect": "<p><span>Kenapa?</span> Malu ngaku semester 7 karena belum seminar? hahaha</p>" // no comma here
        },
        { // Question 3
            "q": "Kelas kita punya julukan apa?",
            "a": [
                {"option": "BIOZ",      		 	 		"correct": true},
                {"option": "Obrolan Asik Tentang Off-B",	"correct": false},
                {"option": "Offering Orang2 Ternama",		"correct": false},
                {"option": "Offering Orang2 Keren",   		"correct": false} // no comma here
            ],
            "correct": "<p><span>Bener!</span>B Informatic Offering Society.</p>",
            "incorrect": "<p><span>Salah.</span>Offering Orang2 Ternama dan Keren untuk sementara belum.</p>" // no comma here
        },
        { // Question 4
            "q": "Off-B pernah....",
            "a": [
                {"option": "Berjemur di Dreamland",    			"correct": true},
                {"option": "Jalan2 di Malioboro",    			"correct": true},
				{"option": "Ke Makam Bung Karno",  				"correct": true},
                {"option": "Jalan2 di Poppies Lane",  			"correct": true},
                {"option": "Menikmati Sunset di Kuta",  		"correct": true},
                {"option": "Mendayung di Selorejo",  			"correct": true},
                {"option": "Berlayar di Pasirputih",  			"correct": true},
                {"option": "Menikmati Pantai Klayar",  			"correct": false},
                {"option": "Bali Part 2",			  			"correct": false},
                {"option": "Ke Gunung Bromo",			  		"correct": true},
                {"option": "Rafting di Kasembon",  				"correct": false} // no comma here
            ],
            "correct": "<p><span>Yap!</span>Anda offering-B sejati.</p>",
            "incorrect": "<p><span>Masih salah gan!</span> dulu gak ngikut yaa? kasian.</p>" // no comma here
        },
        { // Question 5
            "q": "Aktifitas Offering B apa saja??",
            "a": [
                {"option": "Kuliah",   		"correct": true},
                {"option": "Ngopi",   		"correct": true},
                {"option": "Futsal", 	 	"correct": true},
                {"option": "Nge-game", 	 	"correct": true},
                {"option": "Nge-band", 	 	"correct": true},
                {"option": "Buber", 	 	"correct": true},
                {"option": "Touring", 		"correct": true},
                {"option": "Touruu...",  	"correct": false} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> BIOZ Sejati.</p>",
            "incorrect": "<p><span>Kurang Tepat!</span> Diragukan ke'Off-B'an-nya.</p>" // no comma here
        } // no comma here
    ]
};