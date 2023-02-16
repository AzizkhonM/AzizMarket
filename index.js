require("dotenv").config()
const { Telegraf, Markup } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start(

    (ctx) => {

        console.log(ctx);

        ctx.replyWithHTML("<b>🤖 Salom! Men Aziz Marketning qo‘llab-quvvatlash botiman. Sizga yordam bermoqchiman!\nQaysi tilda javob berasiz?\n\n🤖 Здравствуйте! Я бот поддержки Aziz Market. Хочу вам помочь!\nНа каком языке вам отвечать?\n\n🤖 Hello! I am an Aziz Market support bot. I want to help you!\nWhat language do you need to respond in?</b>", Markup.inlineKeyboard([
			Markup.button.callback("UZB 🇺🇿", "UZB 🇺🇿"),
            Markup.button.callback("RUS 🇷🇺", "RUS 🇷🇺"),
			Markup.button.callback("ENG 🇬🇧", "ENG 🇬🇧"),
		]))
        
    }

)


bot.on("callback_query", (ctx) => {


    console.log(ctx);


    if (ctx.update.callback_query.data === 'UZB 🇺🇿' || ctx.update.callback_query.data === "🔝 Bosh sahifaga" || ctx.update.callback_query.data === "🖐🏻 Menda yana savol bor") {

        ctx.replyWithHTML("<b>Aytingchi, sizning savolingiz nima bilan bog‘liq?\n\nQuyidagi menyudan punktni tanlashingiz kerak</b>", Markup.inlineKeyboard([
			[{text: "🚀 Mening buyurtmam qachon yetkaziladi?", callback_data: "🚀 Mening buyurtmam qachon yetkaziladi?"}],
            [{text: "🔧 Buyurtmani o‘zgartirish", callback_data: "🔧 Buyurtmani o‘zgartirish"}, 
			 {text: "🚫 Buyurtmani bekor qilish", callback_data: "🚫 Buyurtmani bekor qilish"}],
			[{text: "🕛 Saqlash muddati", callback_data: "🕛 Saqlash muddati"},
			 {text: "💸 To‘lov va qaytarib berish", callback_data: "💸 To‘lov va qaytarib berish"}],
			[{text: "🔙 Mahsulotni qaytarish", callback_data: "🔙 Mahsulotni qaytarish"},
			 {text: "📦 Buyurtmadagi mahsulotlar", callback_data: "📦 Buyurtmadagi mahsulotlar"}],
			[{text: "🤔 Aziz Market qaysi shaharlarda bor?", callback_data: "🤔 Aziz Market qaysi shaharlarda bor?"}],
			[{text: "👦🏻 Do‘stim olib ketsa bo‘ladimi?", callback_data: "👦🏻 Do‘stim olib ketsa bo‘ladimi?"}],
			[{text: "🚚 Yetkazib berish shartlari", callback_data: "🚚 Yetkazib berish shartlari"},
			 {text: "😒 Javob topa olmadim", callback_data: "😒 Javob topa olmadim"}]
		]))

        ctx.editMessageReplyMarkup({
            reply_markup: { remove_keyboard: true },
        })

    }


    if (ctx.update.callback_query.data === '🚀 Mening buyurtmam qachon yetkaziladi?') {

        ctx.replyWithHTML("<b>Yaxshi. Yetkazib berishning qanday turini tanlagansiz?</b>", Markup.inlineKeyboard([
			[{text: "🚚 Tarqatish punktiga yetkazish", callback_data: "🚚 Tarqatish punktiga yetkazish"}],
            [{text: "🚗 Kuryer yetkazib berishi", callback_data: "🚗 Kuryer yetkazib berishi"}],
			[{text: "🔝 Bosh sahifaga", callback_data: "🔝 Bosh sahifaga"}]
		]))

        ctx.editMessageReplyMarkup({
            reply_markup: { remove_keyboard: true },
        })
        
    }


    if (ctx.update.callback_query.data === '🚚 Tarqatish punktiga yetkazish') {

        ctx.replyWithHTML("<b>Xarid (rasprodaja) davrida berilgan buyurtmalar keyingi kun ichida yetkazib beriladi😊\n\nBuyurtma tarqatish punktiga kelishi bilan siz SMS-xabarnoma olasiz.  Afsuski, yetkazib berilish aniq vaqtini ayta olmaymiz.</b>", Markup.inlineKeyboard([
			[{text: "👍🏻 Rahmat", callback_data: "👍🏻 Rahmat"}],
            [{text: "☹️ Buyurtmamni vaqtida olmadim", callback_data: "☹️ Buyurtmamni vaqtida olmadim"}],
			[{text: "🔝 Bosh sahifaga", callback_data: "🔝 Bosh sahifaga"}]
		]))

        ctx.editMessageReplyMarkup({
            reply_markup: { remove_keyboard: true },
        })
        
    }


    if (ctx.update.callback_query.data === '👍🏻 Rahmat' || ctx.update.callback_query.data === "😔 Ha, tushunaman" || ctx.update.callback_query.data === "😇 Ulgurarman, kerak emas" || ctx.update.callback_query.data === "😊 Ulguryapman, rahmat" || ctx.update.callback_query.data === "👍🏻 Yordam berdi, rahmat" || ctx.update.callback_query.data === "👍🏻 Xatolik bartaraf bo‘ldi, rahmat") {

        ctx.replyWithHTML("<b>Agar yana savol tug‘ilsa ushbu tugmani bossangiz bas</b>", Markup.inlineKeyboard([
			[{text: "🖐🏻 Menda yana savol bor", callback_data: "🖐🏻 Menda yana savol bor"}],
		]))

        ctx.editMessageReplyMarkup({
            reply_markup: { remove_keyboard: true },
        })
        
    }


    if (ctx.update.callback_query.data === '☹️ Buyurtmamni vaqtida olmadim' || ctx.update.callback_query.data === "❌ Buyurtmani bekor qilish" || ctx.update.callback_query.data === "👍🏻 Ha, mayli" || ctx.update.callback_query.data === "📅 Yo‘q, hatto bu ham yordam bermaydi" || ctx.update.callback_query.data === "💲 Arzonroq narxda topdim" || ctx.update.callback_query.data === "🐌 Yetkazib berish kuttiryapti" || ctx.update.callback_query.data === "🧦 Qayta buyurtma berdim" || ctx.update.callback_query.data === "🚫 Boshqa sabab" || ctx.update.callback_query.data === "🙋🏻‍♂️ Muddatini uzaytirmoqchiman") {

        ctx.replyWithHTML("<b>Iltimos, buyurtma raqamingizni yozing</b>", Markup.inlineKeyboard([
			[{text: "🔝 Bosh sahifaga", callback_data: "🔝 Bosh sahifaga"}],
		]))

        ctx.editMessageReplyMarkup({
            reply_markup: { remove_keyboard: true },
        })
        
    }


    if (ctx.update.callback_query.data === '🚗 Kuryer yetkazib berishi') {

        ctx.replyWithHTML("<b>Buyurtmalar soat 10:00 dan 22:00 gacha yetkazib beriladi. Afsuski, biz sizga aniq vaqtni ayta olmaymiz😔 kuryer buyurtmangizni yetkazib berishdan 30 daqiqa oldin siz bilan bog‘lanadi! Iltimos, aloqada bo‘ling</b>", Markup.inlineKeyboard([
			[{text: "👍🏻 Rahmat", callback_data: "👍🏻 Rahmat"}],
            [{text: "☹️ Buyurtmamni vaqtida olmadim", callback_data: "☹️ Buyurtmamni vaqtida olmadim"}],
			[{text: "🔝 Bosh sahifaga", callback_data: "🔝 Bosh sahifaga"}]
		]))

        ctx.editMessageReplyMarkup({
            reply_markup: { remove_keyboard: true },
        })
        
    }


    if (ctx.update.callback_query.data === '🔧 Buyurtmani o‘zgartirish') {

        ctx.replyWithHTML("<b>Yaxshi, siz aynan nimani o‘zgartirmoqchilingizni yozib yuborsangiz</b>", Markup.inlineKeyboard([
			[{text: "📦 Buyurtmadagi mahsulotlar", callback_data: "📦 Buyurtmadagi mahsulotlar"}],
			[{text: "🔝 Bosh sahifaga", callback_data: "🔝 Bosh sahifaga"}]
		]))

        ctx.editMessageReplyMarkup({
            reply_markup: { remove_keyboard: true },
        })
        
    }


    if (ctx.update.callback_query.data === '📦 Buyurtmadagi mahsulotlar') {

        ctx.replyWithHTML("<b>Aynan qanday qilib siz buyurtmani o‘zgartirmoqchisiz?</b>", Markup.inlineKeyboard([
			[{text: "➕ Mahsulot qo‘shish", callback_data: "➕ Mahsulot qo‘shish"}],
			[{text: "➖ Mahsulotni olib tashlash", callback_data: "➖ Mahsulotni olib tashlash"}],
			[{text: "🔝 Bosh sahifaga", callback_data: "🔝 Bosh sahifaga"}]
		]))

        ctx.editMessageReplyMarkup({
            reply_markup: { remove_keyboard: true },
        })
        
    }


    if (ctx.update.callback_query.data === '➕ Mahsulot qo‘shish' || ctx.update.callback_query.data === "➖ Mahsulotni olib tashlash") {

        ctx.replyWithHTML("<b>Afsuski, berilgan buyurtmaga o‘zgartirish kiritish mumkin emas, siz kerakli mahsulot bilan yangi buyurtma berishingiz va eskisidan voz kechishingiz mumkin.\n\nFaqat shu uslub mavjud, chunki buyurtmalar tezkorlikbilan yig‘iladi, va shuning uchun texnik jihatdan biz jarayonga aralasha olmaymiz va buyurtmada biror narsani o‘zgartira olmaymiz.\n\nKeyinchalik biz bunday imkoniyatni qo‘shishga harakat qilamiz, ammo ayni paytda, afsuski, bunday imkoniyat yo‘q</b>", Markup.inlineKeyboard([
			[{text: "😔 Ha, tushunaman", callback_data: "😔 Ha, tushunaman"}],
			[{text: "❌ Buyurtmani bekor qilish", callback_data: "❌ Buyurtmani bekor qilish"}],
			[{text: "🔝 Bosh sahifaga", callback_data: "🔝 Bosh sahifaga"}]
		]))

        ctx.editMessageReplyMarkup({
            reply_markup: { remove_keyboard: true },
        })
        
    }


    if (ctx.update.callback_query.data === '🚫 Buyurtmani bekor qilish') {

        ctx.replyWithHTML("<b>Aytingchi, nima sababdan buyurtmani bekor qilmoqchisiz?</b>", Markup.inlineKeyboard([
			[{text: "⏳ Buyurtmani olib ketishga vaqtim yo‘q", callback_data: "⏳ Buyurtmani olib ketishga vaqtim yo‘q"}],
			[{text: "🌚 Buyurtma endi menga kerak emas", callback_data: "🌚 Buyurtma endi menga kerak emas"}],
			[{text: "😏 Boshqa sabab", callback_data: "😏 Boshqa sabab"}],
			[{text: "🔝 Bosh sahifaga", callback_data: "🔝 Bosh sahifaga"}]
		]))

        ctx.editMessageReplyMarkup({
            reply_markup: { remove_keyboard: true },
        })
        
    }


    if (ctx.update.callback_query.data === '⏳ Buyurtmani olib ketishga vaqtim yo‘q') {

        ctx.replyWithHTML("<b>Bekor qilish uchun vaqt yo‘q\n\nAgar siz buyurtmangizni mahsulot tarqatish punktidan 5 kun ichida olib ketishga ulgurmasangiz, biz buyurtmangiz saqlanish muddatini 14 kunga uzaytira olamiz! Uzaytiramizmi?</b>", Markup.inlineKeyboard([
			[{text: "👍🏻 Ha, mayli", callback_data: "👍🏻 Ha, mayli"}],
			[{text: "📅 Yo‘q, hatto bu ham yordam bermaydi", callback_data: "📅 Yo‘q, hatto bu ham yordam bermaydi"}],
			[{text: "😇 Ulgurarman, kerak emas", callback_data: "😇 Ulgurarman, kerak emas"}],
			[{text: "🔝 Bosh sahifaga", callback_data: "🔝 Bosh sahifaga"}]
		]))

        ctx.editMessageReplyMarkup({
            reply_markup: { remove_keyboard: true },
        })
        
    }


    if (ctx.update.callback_query.data === '🌚 Buyurtma endi menga kerak emas') {

        ctx.replyWithHTML("<b>Aytingchi, siz nima sababdan buyurtmani bekor qilmoqchisiz?</b>", Markup.inlineKeyboard([
			[{text: "💲 Arzonroq narxda topdim", callback_data: "💲 Arzonroq narxda topdim"}],
			[{text: "🐌 Yetkazib berish kuttiryapti", callback_data: "🐌 Yetkazib berish kuttiryapti"}],
			[{text: "🧦 Qayta buyurtma berdim", callback_data: "🧦 Qayta buyurtma berdim"}],
			[{text: "🚫 Boshqa sabab", callback_data: "🚫 Boshqa sabab"}, {text: "🔝 Bosh sahifaga", callback_data: "🔝 Bosh sahifaga"}]
		]))

        ctx.editMessageReplyMarkup({
            reply_markup: { remove_keyboard: true },
        })
        
    }


    if (ctx.update.callback_query.data === '🕛 Saqlash muddati') {

        ctx.replyWithHTML("<b>Buyurtmalar tarqatish punktida 5 kun davomida saqlanadi.\n\nOlib ketishga ulgurasizmi yoki saqlash muddatini uzaytiramizmi?😊</b>", Markup.inlineKeyboard([
			[{text: "😊 Ulguryapman, rahmat", callback_data: "😊 Ulguryapman, rahmat"}],
			[{text: "🙋🏻‍♂️ Muddatini uzaytirmoqchiman", callback_data: "🙋🏻‍♂️ Muddatini uzaytirmoqchiman"}],
			[{text: "🔝 Bosh sahifaga", callback_data: "🔝 Bosh sahifaga"}]
		]))

        ctx.editMessageReplyMarkup({
            reply_markup: { remove_keyboard: true },
        })
        
    }


    if (ctx.update.callback_query.data === '💸 To‘lov va qaytarib berish') {

        ctx.replyWithHTML("<b>Aytingchi, sizning savolingiz nima bilan bog'liq?</b>", Markup.inlineKeyboard([
			[{text: "💸 Buyurtma uchun to‘lov", callback_data: "💸 Buyurtma uchun to‘lov"}],
			[{text: "🔝 Bosh sahifaga", callback_data: "🔝 Bosh sahifaga"}]
		]))

        ctx.editMessageReplyMarkup({
            reply_markup: { remove_keyboard: true },
        })
        
    }


    if (ctx.update.callback_query.data === '💸 Buyurtma uchun to‘lov') {

        ctx.replyWithHTML("<b>Iltimos, aytingchi, buyurtmani to‘lash bilan bog‘liq qanday savolingiz bor?</b>", Markup.inlineKeyboard([
			[{text: "🛒 Qanday to‘lov turlari mavjud", callback_data: "🛒 Qanday to‘lov turlari mavjud"}],
			[{text: "😔 To‘lovda muammo", callback_data: "😔 To‘lovda muammo"}],
			[{text: "🔝 Bosh sahifaga", callback_data: "🔝 Bosh sahifaga"}]
		]))

        ctx.editMessageReplyMarkup({
            reply_markup: { remove_keyboard: true },
        })
        
    }


    if (ctx.update.callback_query.data === '🛒 Qanday to‘lov turlari mavjud') {

        ctx.replyWithHTML("<b>Iltimos, aytingchi, buyurtmani to‘lash bilan bog‘liq qanday savolingiz bor?</b>", Markup.inlineKeyboard([
			[{text: "💳 Bank kartalari", callback_data: "💳 Bank kartalari"}],
			[{text: "📝 Bo‘lib to‘lash", callback_data: "📝 Bo‘lib to‘lash"}],
			[{text: "💁🏻‍♂️ Qo‘lga olganda to‘lash", callback_data: "💁🏻‍♂️ Qo‘lga olganda to‘lash"}],
			[{text: "🔝 Bosh sahifaga", callback_data: "🔝 Bosh sahifaga"}]
		]))

        ctx.editMessageReplyMarkup({
            reply_markup: { remove_keyboard: true },
        })
        
    }


    if (ctx.update.callback_query.data === '💳 Bank kartalari') {

        ctx.replyWithHTML("<b>Onlayn ravishda UZCARD, HUMO kartasi bilan to'lashingiz mumkin.</b>", Markup.inlineKeyboard([
			[{text: "👍🏻 Rahmat", callback_data: "👍🏻 Rahmat"}],
			[{text: "🔝 Bosh sahifaga", callback_data: "🔝 Bosh sahifaga"}]
		]))

        ctx.editMessageReplyMarkup({
            reply_markup: { remove_keyboard: true },
        })
        
    }


    if (ctx.update.callback_query.data === '📝 Bo‘lib to‘lash') {

        ctx.replyWithHTML("<b>To'lov shartlari:\n\n1. Karta kamida 6 oylik bo'lishi kerak.\n2. Karta Humo yoki Uzcard bo'lishi kerak.\n3. Balans nolga teng, 1 so'm yoki undan ko'p bo'lishi kerak.\n4. Kartadagi oxirgi 3 oy uchun tushumlar 1 000 000 so‘mdan ortiq bo‘lishi kerak.\n5. SMS-xabarnoma foydalanuvchi hisob qaydnomasini ro'yxatdan o'tkazgan raqamga ulangan bo'lishi kerak.\n6. Yosh chegarasi 22 yoshdan 65 yoshgacha.\n7. Toʻlov foizi: 6 oyga - 26%, 9 oyga - 34%, 12 oyga - 44%</b>", Markup.inlineKeyboard([
			[{text: "👍🏻 Rahmat", callback_data: "👍🏻 Rahmat"}],
			[{text: "🔝 Bosh sahifaga", callback_data: "🔝 Bosh sahifaga"}]
		]))

        ctx.editMessageReplyMarkup({
            reply_markup: { remove_keyboard: true },
        })
        
    }


    if (ctx.update.callback_query.data === '💁🏻‍♂️ Qo‘lga olganda to‘lash') {

        ctx.replyWithHTML("<b>Buyurtmani qabul qilish vaqtida siz naqd pul yoki UZCARD, HUMO karta orqali to'lashingiz mumkin. Buyurtmani olgandan keyin to'lashda mavjud to'lov tizimlari: Mastercard, Visa.</b>", Markup.inlineKeyboard([
			[{text: "👍🏻 Rahmat", callback_data: "👍🏻 Rahmat"}],
			[{text: "🔝 Bosh sahifaga", callback_data: "🔝 Bosh sahifaga"}]
		]))

        ctx.editMessageReplyMarkup({
            reply_markup: { remove_keyboard: true },
        })
        
    }


    if (ctx.update.callback_query.data === '😔 To‘lovda muammo') {

        ctx.replyWithHTML("<b>Buyurtmalarni onlayn, bo‘lib to‘lash yoki buyurtmani qabul qilish paytida to‘lash mumkin.</b>", Markup.inlineKeyboard([
			[{text: "💵 To‘lov amalga oshmadi", callback_data: "💵 To‘lov amalga oshmadi"}],
			[{text: "😔 Promokodni kiritib bo‘lmayabdi", callback_data: "😔 Promokodni kiritib bo‘lmayabdi"}],
			[{text: "🔝 Bosh sahifaga", callback_data: "🔝 Bosh sahifaga"}]
		]))

        ctx.editMessageReplyMarkup({
            reply_markup: { remove_keyboard: true },
        })
        
    }


    if (ctx.update.callback_query.data === '💵 To‘lov amalga oshmadi') {

        ctx.replyWithHTML("<b>Buyurtmalarni onlayn, bo‘lib to‘lash yoki buyurtmani qabul qilish paytida to‘lash mumkin.</b>", Markup.inlineKeyboard([
			[{text: "👍🏻 Yordam berdi, rahmat", callback_data: "👍🏻 Yordam berdi, rahmat"}],
			[{text: "😔 Hammasi to‘g‘ri, ammo o‘xshamadi", callback_data: "😔Hammasi to‘g‘ri, ammo o‘xshamadi"}],
			[{text: "🔝 Bosh sahifaga", callback_data: "🔝 Bosh sahifaga"}]
		]))

        ctx.editMessageReplyMarkup({
            reply_markup: { remove_keyboard: true },
        })
        
    }


    if (ctx.update.callback_query.data === '😔Hammasi to‘g‘ri, ammo o‘xshamadi') {

        ctx.replyWithHTML("<b>Ilovamiz tez-tez yangilanib turganligi sababli, baʼzida bizning ishlab chiquvchilarimiz biror narsani bexosdan kuzatuvdan chetda qoldirishi mumkin. Shuning uchun, ilovani qayta o‘rnatishingizni tavsiya qilamiz. Shunday bilan birga siz kesh-xotirani tozalaysiz, demakki, xatolik yo‘q bo‘lishi mumkin. Xavotir olmang, savatdagi barcha mahsulotlar saqlanib qoladi.</b>", Markup.inlineKeyboard([
			[{text: "👍🏻 Xatolik bartaraf bo‘ldi, rahmat", callback_data: "👍🏻 Xatolik bartaraf bo‘ldi, rahmat"}],
			[{text: "😔 Hammasi to‘g‘ri, ammo o‘xshamadi", callback_data: "😔 Hammasi to‘g‘ri, ammo o‘xshamadi"}],
			[{text: "🔝 Bosh sahifaga", callback_data: "🔝 Bosh sahifaga"}]
		]))

        ctx.editMessageReplyMarkup({
            reply_markup: { remove_keyboard: true },
        })
        
    }


    if (ctx.update.callback_query.data === '😔 Hammasi to‘g‘ri, ammo o‘xshamadi') {

        ctx.replyWithHTML("<b>Tushunarli, bu holda texnik qo‘llab-quvvatlash mutaxassisini ulayman.\nIltimos, ilovangiz versiyasini yozing.\n\nIlova versiyasini qanday topish mumkin:\n\nAgar sizda iOS bo‘lsa, Profil yorlig‘iga o‘ting va yuqoriga suring.\nIlovaning versiyasi ekranning pastki qismida bo‘ladi.\n\nAgar sizda Android bo‘lsa, unda siz kabinet yorlig‘iga o‘tishingiz va yuqoriga surishingiz kerak.\nIlovaning versiyasi ekranning pastki qismida bo‘ladi.</b>", Markup.inlineKeyboard([
			[{text: "🔝 Bosh sahifaga", callback_data: "🔝 Bosh sahifaga"}]
		]))

        ctx.editMessageReplyMarkup({
            reply_markup: { remove_keyboard: true },
        })
        
    }


    if (ctx.update.callback_query.data === '😔 Promokodni kiritib bo‘lmayabdi') {

        ctx.replyWithHTML("<b>Promokodni kiritish bilan bog‘liq texnik muammolar juda kam uchraydi.\n\nTo‘lov uchun barcha ma'lumotlarni: ism, yetkazib berish usuli, telefon raqam, yetkazib berish manzilini to‘g‘ri to‘ldirganingizni tekshirishingizni tavsiya qilamiz.\n\nSo‘ng, takroran yana urinib ko‘ring.\n\nIltimos, ma'lumotda keraksiz belgilar va bo‘shliqlarsiz yozing.</b>", Markup.inlineKeyboard([
			[{text: "👍🏻 Yordam berdi, rahmat", callback_data: "👍🏻 Yordam berdi, rahmat"}],
			[{text: "😒 Barchasini bajardim, probel yo‘q", callback_data: "😒 Barchasini bajardim, probel yo‘q"}],
			[{text: "🔝 Bosh sahifaga", callback_data: "🔝 Bosh sahifaga"}]
		]))

        ctx.editMessageReplyMarkup({
            reply_markup: { remove_keyboard: true },
        })
        
    }


    if (ctx.update.callback_query.data === '😒 Barchasini bajardim, probel yo‘q') {

        ctx.replyWithHTML("<b>Iltimos, aytingchi, promokodni kiritishda qanday xato yuz beradi?</b>", Markup.inlineKeyboard([
			[{text: "🙄 Promokod ishlatib bo‘lingan", callback_data: "🙄 Promokod ishlatib bo‘lingan"}],
			[{text: "⏳ Promokod muddati tugagan", callback_data: "⏳ Promokod muddati tugagan"}],
			[{text: "🔝 Bosh sahifaga", callback_data: "🔝 Bosh sahifaga"}]
		]))

        ctx.editMessageReplyMarkup({
            reply_markup: { remove_keyboard: true },
        })
        
    }


    if (ctx.update.callback_query.data === "🙄 Promokod ishlatib bo‘lingan") {

        ctx.replyWithHTML("<b>Promokod ishlatib bo‘lingan</b>", Markup.inlineKeyboard([
			[{text: "🔝 Bosh sahifaga", callback_data: "🔝 Bosh sahifaga"}]
		]))

        ctx.editMessageReplyMarkup({
            reply_markup: { remove_keyboard: true },
        })
        
    }


    if (ctx.update.callback_query.data === "⏳ Promokod muddati tugagan") {

        ctx.replyWithHTML("<b>Promokod muddati tugagan</b>", Markup.inlineKeyboard([
			[{text: "🔝 Bosh sahifaga", callback_data: "🔝 Bosh sahifaga"}]
		]))

        ctx.editMessageReplyMarkup({
            reply_markup: { remove_keyboard: true },
        })
        
    }


})



bot.on()


bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));