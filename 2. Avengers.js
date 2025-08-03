const actors = [
    {
        name: "Robert Downey Jr.",
        role: "Tony Stark / Iron Man (Người sắt)",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_ironman_v1_lg.jpg",
    },
    {
        name: "Chris Evans",
        role: "Steve Rogers / Captain America (Đội trưởng Mỹ)",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_captam_v2_lg.jpg",
    },
    {
        name: "Mark Ruffalo",
        role: "Bruce Banner / Hulk (Người khổng lồ xanh)",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_bruce_v1_lg.jpg",
    },
    {
        name: "Chris Hemsworth",
        role: "Thor (Thần sấm)",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_thor_v1_lg.jpg",
    },
    {
        name: "Scarlett Johansson",
        role: "Natasha Romanoff / Black Widow (Góa phụ đen)",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_blkwidow_v1_lg.jpg",
    },
    {
        name: "Jeremy Renner",
        role: "Clint Barton / Hawkeye (Mắt diều hâu) / Ronin (Lãng nhân)",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_hawkeye_v1_lg.jpg",
    },
    {
        name: "Don Cheadle",
        role: "James Rhodey Rhodes / War Machine (Cỗ máy chiến tranh)",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_warmachine_v1_lg.jpg",
    },
    {
        name: "Paul Rudd",
        role: "Scott Lang / Ant-Man (Người Kiến)",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_antman_v1_lg.jpg",
    },
    {
        name: "Brie Larson",
        role: "Carol Danvers / Captain Marvel (Đại úy Marvel)",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_captainmarvel_v2_lg.jpg",
    },
    {
        name: "Karen Gillan",
        role: "Nebula",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_nebula_v1_lg.jpg",
    },
    {
        name: "Danai Gurira",
        role: "Okoye",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_okoye_v1_lg.jpg",
    },
    {
        name: "Benedict Wong",
        role: "Wong",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_wong_v2_lg.jpg",
    },
    {
        name: "Bradley Cooper",
        role: "Rocket",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_rocket_v2_lg.jpg",
    },
    {
        name: "Gwyneth Paltrow",
        role: "Virginia Pepper Potts",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_pepper_v2_lg.jpg",
    },
    {
        name: "Tessa Thompson",
        role: "Valkyrie",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_valkyrie_v2_lg.jpg",
    },
    {
        name: "Tom Holland",
        role: "Peter Parker / Spider-Man (Người Nhện)",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_spiderman_v1_lg.jpg",
    },
    {
        name: "Vin Diesel",
        role: "Groot",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_groot_v2_lg.jpg",
    },
    {
        name: "Evangeline Lilly",
        role: "Hope van Dyne / Wasp (Chiến binh ong)",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_wasp_v2_lg.jpg",
    },
    {
        name: "Sebastian Stan",
        role: "Bucky Barnes / Winter Soldier (Chiến binh mùa đông)",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_wintersoldier_v1_lg.jpg",
    },
    {
        name: "Dave Bautista",
        role: "Drax the Destroyer",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_drax_v2_lg.jpg",
    },
    {
        name: "Chris Pratt",
        role: "Peter Quill / Star-Lord (Chúa tể các vì sao)",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_starlord_v1_lg.jpg",
    },
    {
        name: "Zoe Saldana",
        role: "Gamora",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_gamora_v2_lg.jpg",
    },
    {
        name: "Pom Klementieff",
        role: "Mantis",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_mantis_v1_lg.jpg",
    },
    {
        name: "Elizabeth Olsen",
        role: "Wanda Maximoff / Scarlet Witch (Phù thủy đỏ)",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_scarletwitch_v1_lg.jpg",
    },
    {
        name: "Benedict Cumberbatch",
        role: "Stephen Strange / Sorcerer Supreme (Phù thủy tối thượng)",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_drstrange_v1_lg.jpg",
    },
    {
        name: "Chadwick Boseman",
        role: "T'Challa / Black Panther (Chiến binh báo đen)",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_blkpanther_v1_lg.jpg",
    },
    {
        name: "Letitia Wright",
        role: "Shuri",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_shuri_v1_lg.jpg",
    },
    {
        name: "Samuel L. Jackson",
        role: "Nick Fury",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_nickfury_v2_lg.jpg",
    },
    {
        name: "Tom Hiddleston",
        role: "Loki",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_loki_v1_lg.jpg",
    },
    {
        name: "Paul Bettany",
        role: "Vision",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_vision_v1_lg.jpg",
    },
];

const actorsContainer = document.getElementById("actors");

actors.forEach(actor => {
    const card = document.createElement("div");
    card.classList.add("actor-card");
    
    card.innerHTML = `
        <img src="${actor.img}" alt="${actor.name}">
        <div class="actor-info">
            <h3>${actor.name}</h3>
            <p>${actor.role}</p>
        </div>
    `;
    actorsContainer.appendChild(card);
});
