const actors = [
    {
        name: "Robert Downey Jr.",
        role: "Tony Stark / Iron Man (Người sắt)",
        group: "original",
        groupLabel: "Biệt đội gốc",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_ironman_v1_lg.jpg",
        bio: "Sau khi được giải cứu khỏi không gian và có cuộc sống yên bình bên Pepper cùng con gái Morgan, Tony Stark giải mã bài toán du hành thời gian và hy sinh bằng cú búng tay định mệnh để xóa sổ binh đoàn Thanos."
    },
    {
        name: "Chris Evans",
        role: "Steve Rogers / Captain America (Đội trưởng Mỹ)",
        group: "original",
        groupLabel: "Biệt đội gốc",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_captam_v2_lg.jpg",
        bio: "Thủ lĩnh kiên định dẫn dắt biệt đội thực hiện kế hoạch Time Heist. Trong trận chiến cuối cùng, Steve nâng được búa Mjolnir và sau khi trả lại các Viên đá Vô cực, anh trao chiếc khiên cho Sam Wilson."
    },
    {
        name: "Mark Ruffalo",
        role: "Bruce Banner / Hulk (Người khổng lồ xanh)",
        group: "original",
        groupLabel: "Biệt đội gốc",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_bruce_v1_lg.jpg",
        bio: "Hợp nhất trí tuệ của Bruce Banner và sức mạnh của Hulk thành Smart Hulk. Anh là người thực hiện cú búng tay đầu tiên với Găng tay Nano để hồi sinh một nửa vũ trụ."
    },
    {
        name: "Chris Hemsworth",
        role: "Thor (Thần sấm)",
        group: "original",
        groupLabel: "Biệt đội gốc",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_thor_v1_lg.jpg",
        bio: "Trải qua mặc cảm thất bại tại New Asgard, Thor tìm lại giá trị bản thân khi gặp lại mẹ ở Asgard năm 2013, chiến đấu bằng cả Stormbreaker lẫn Mjolnir rồi lên đường cùng Vệ binh Dải Ngân hà."
    },
    {
        name: "Scarlett Johansson",
        role: "Natasha Romanoff / Black Widow (Góa phụ đen)",
        group: "original",
        groupLabel: "Biệt đội gốc",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_blkwidow_v1_lg.jpg",
        bio: "Người giữ vững tinh thần Avengers trong suốt 5 năm u tối sau cú búng tay. Trên hành tinh Vormir năm 2014, Natasha lựa chọn hy sinh để Clint có thể mang về Soul Stone."
    },
    {
        name: "Jeremy Renner",
        role: "Clint Barton / Hawkeye (Mắt diều hâu) / Ronin (Lãng nhân)",
        group: "original",
        groupLabel: "Biệt đội gốc",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_hawkeye_v1_lg.jpg",
        bio: "Mất toàn bộ gia đình trong cú búng tay, Clint trở thành Ronin suốt 5 năm trước khi được Natasha đưa trở lại để tham gia nhiệm vụ lấy lại các Viên đá Vô cực."
    },
    {
        name: "Don Cheadle",
        role: "James Rhodey Rhodes / War Machine (Cỗ máy chiến tranh)",
        group: "allies",
        groupLabel: "Đồng minh",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_warmachine_v1_lg.jpg",
        bio: "Đồng hành cùng Nebula đến hành tinh Morag năm 2014 để thu thập Power Stone và sát cánh bảo vệ trụ sở Avengers trong trận chiến cuối cùng."
    },
    {
        name: "Paul Rudd",
        role: "Scott Lang / Ant-Man (Người Kiến)",
        group: "allies",
        groupLabel: "Đồng minh",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_antman_v1_lg.jpg",
        bio: "Thoát khỏi Lượng tử Giới sau 5 năm (nhưng với anh chỉ như 5 giờ), Scott mang đến giả thuyết du hành thời gian mở ra cơ hội cứu vãn cả vũ trụ."
    },
    {
        name: "Brie Larson",
        role: "Carol Danvers / Captain Marvel (Đại úy Marvel)",
        group: "allies",
        groupLabel: "Đồng minh",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_captainmarvel_v2_lg.jpg",
        bio: "Giải cứu Tony Stark và Nebula trôi dạt ngoài không gian, sau đó quay trở lại Trái Đất phá hủy chiến hạm khổng lồ Sanctuary II của Thanos."
    },
    {
        name: "Karen Gillan",
        role: "Nebula",
        group: "guardians",
        groupLabel: "Vệ binh Ngân hà",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_nebula_v1_lg.jpg",
        bio: "Chiến binh cyborg từng phục vụ Thanos nhưng đứng về phía các Avengers. Ký ức liên kết mạng với phiên bản quá khứ vô tình để lộ kế hoạch du hành thời gian cho Thanos."
    },
    {
        name: "Danai Gurira",
        role: "Okoye",
        group: "allies",
        groupLabel: "Đồng minh",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_okoye_v1_lg.jpg",
        bio: "Nữ tướng quân đội Dora Milaje của Wakanda, phối hợp cùng Natasha theo dõi các biến động toàn cầu và chỉ huy lực lượng Wakanda trong trận đại chiến."
    },
    {
        name: "Benedict Wong",
        role: "Wong",
        group: "allies",
        groupLabel: "Đồng minh",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_wong_v2_lg.jpg",
        bio: "Pháp sư giữ vai trò mở hàng trăm cánh cổng dịch chuyển đưa toàn bộ các siêu anh hùng hồi sinh cùng quân đoàn Wakanda, Asgard và Ravagers đến chiến trường."
    },
    {
        name: "Bradley Cooper",
        role: "Rocket",
        group: "guardians",
        groupLabel: "Vệ binh Ngân hà",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_rocket_v2_lg.jpg",
        bio: "Thành viên còn sống sót duy nhất của Vệ binh Dải Ngân hà trong suốt 5 năm, hợp tác cùng Tony và Bruce chế tạo thiết bị lượng tử và đi cùng Thor đến Asgard."
    },
    {
        name: "Gwyneth Paltrow",
        role: "Virginia Pepper Potts",
        group: "allies",
        groupLabel: "Đồng minh",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_pepper_v2_lg.jpg",
        bio: "Khoác lên mình bộ giáp Rescue (Mark XLIX) do Tony chế tạo, cùng chiến đấu trên bầu trời và ở bên Tony Stark trong giây phút cuối đời."
    },
    {
        name: "Tessa Thompson",
        role: "Valkyrie",
        group: "allies",
        groupLabel: "Đồng minh",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_valkyrie_v2_lg.jpg",
        bio: "Lãnh đạo người dân New Asgard trên Trái Đất, cưỡi chiến mã có cánh tham chiến và chính thức được Thor trao lại ngôi vị cai trị Asgard."
    },
    {
        name: "Tom Holland",
        role: "Peter Parker / Spider-Man (Người Nhện)",
        group: "allies",
        groupLabel: "Đồng minh",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_spiderman_v1_lg.jpg",
        bio: "Hồi sinh sau cú búng tay của Hulk, Peter lập tức có mặt bảo vệ Găng tay Nano và đoàn tụ đầy xúc động với người thầy Tony Stark."
    },
    {
        name: "Vin Diesel",
        role: "Groot",
        group: "guardians",
        groupLabel: "Vệ binh Ngân hà",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_groot_v2_lg.jpg",
        bio: "Sinh vật cây đồng hành cùng Rocket và các Vệ binh Dải Ngân hà trở lại chiến trường thông qua cổng dịch chuyển của các pháp sư."
    },
    {
        name: "Evangeline Lilly",
        role: "Hope van Dyne / Wasp (Chiến binh ong)",
        group: "allies",
        groupLabel: "Đồng minh",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_wasp_v2_lg.jpg",
        bio: "Trở lại cùng các anh hùng hồi sinh, phối hợp với Scott Lang sửa chữa cỗ máy lượng tử nằm trong chiếc xe van giữa trận chiến."
    },
    {
        name: "Sebastian Stan",
        role: "Bucky Barnes / Winter Soldier (Chiến binh mùa đông)",
        group: "allies",
        groupLabel: "Đồng minh",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_wintersoldier_v1_lg.jpg",
        bio: "Người bạn thân lâu năm của Steve Rogers, sát cánh chiến đấu ở mặt trận cuối cùng và chứng kiến khoảnh khắc Steve trao khiên cho Sam Wilson."
    },
    {
        name: "Dave Bautista",
        role: "Drax the Destroyer",
        group: "guardians",
        groupLabel: "Vệ binh Ngân hà",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_drax_v2_lg.jpg",
        bio: "Chiến binh dũng mãnh của nhóm Vệ binh Dải Ngân hà, trở lại chiến đấu trực diện chống lại đội quân Outriders của Thanos."
    },
    {
        name: "Chris Pratt",
        role: "Peter Quill / Star-Lord (Chúa tể các vì sao)",
        group: "guardians",
        groupLabel: "Vệ binh Ngân hà",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_starlord_v1_lg.jpg",
        bio: "Thủ lĩnh nhóm Vệ binh Dải Ngân hà hồi sinh trở về từ hành tinh Titan và tìm kiếm Gamora của dòng thời gian 2014 sau trận chiến."
    },
    {
        name: "Zoe Saldana",
        role: "Gamora",
        group: "guardians",
        groupLabel: "Vệ binh Ngân hà",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_gamora_v2_lg.jpg",
        bio: "Phiên bản Gamora từ năm 2014 theo chân Thanos đến tương lai nhưng phản bội hắn để đứng về phía Nebula và các siêu anh hùng."
    },
    {
        name: "Pom Klementieff",
        role: "Mantis",
        group: "guardians",
        groupLabel: "Vệ binh Ngân hà",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_mantis_v1_lg.jpg",
        bio: "Thành viên sở hữu năng lực thấu cảm của Vệ binh Dải Ngân hà, góp mặt trong đội hình tổng tấn công ở hồi kết."
    },
    {
        name: "Elizabeth Olsen",
        role: "Wanda Maximoff / Scarlet Witch (Phù thủy đỏ)",
        group: "allies",
        groupLabel: "Đồng minh",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_scarletwitch_v1_lg.jpg",
        bio: "Một trong những nhân vật áp đảo Thanos trực diện nhất bằng sức mạnh hỗn mang để trả thù cho Vision."
    },
    {
        name: "Benedict Cumberbatch",
        role: "Stephen Strange / Sorcerer Supreme (Phù thủy tối thượng)",
        group: "allies",
        groupLabel: "Đồng minh",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_drstrange_v1_lg.jpg",
        bio: "Người nhìn thấy 14.000.605 khả năng và ra hiệu cho Tony Stark biết đây chính là cơ hội duy nhất trong một triệu khả năng để chiến thắng."
    },
    {
        name: "Chadwick Boseman",
        role: "T'Challa / Black Panther (Chiến binh báo đen)",
        group: "allies",
        groupLabel: "Đồng minh",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_blkpanther_v1_lg.jpg",
        bio: "Quốc vương Wakanda dẫn đầu cánh quân đầu tiên bước ra từ cổng dịch chuyển tại chiến trường, tạo nên khoảnh khắc mở màn cho cuộc tổng phản công."
    },
    {
        name: "Letitia Wright",
        role: "Shuri",
        group: "allies",
        groupLabel: "Đồng minh",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_shuri_v1_lg.jpg",
        bio: "Thiên tài công nghệ của Wakanda, em gái T'Challa, cùng tham chiến bên cạnh các nữ anh hùng bảo vệ Găng tay Nano."
    },
    {
        name: "Samuel L. Jackson",
        role: "Nick Fury",
        group: "allies",
        groupLabel: "Đồng minh",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_nickfury_v2_lg.jpg",
        bio: "Cựu giám đốc S.H.I.E.L.D. và là người khởi xướng Sáng kiến Avengers, xuất hiện tiễn đưa Tony Stark trong buổi lễ tưởng niệm cuối phim."
    },
    {
        name: "Tom Hiddleston",
        role: "Loki",
        group: "allies",
        groupLabel: "Đồng minh",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_loki_v1_lg.jpg",
        bio: "Trong chuyến du hành về New York năm 2012, Loki quá khứ vô tình chớp lấy khối Tesseract và biến mất, mở ra nhánh thực tại mới."
    },
    {
        name: "Paul Bettany",
        role: "Vision",
        group: "allies",
        groupLabel: "Đồng minh",
        img: "https://cdn.marvel.com/content/1x_masonry/online_char_avengehonor_series_vision_v1_lg.jpg",
        bio: "Android mang Viên đá Tâm trí (Mind Stone) gắn bó mật thiết với cốt truyện Infinity Saga và là động lực tinh thần của Scarlet Witch trong trận chiến."
    }
];

const trailers = [
    {
        id: "TcMBFSGVi1c",
        title: "Avengers: Endgame Official Trailer 1",
        caption: "Trailer chính thức 1 — Giới thiệu bầu không khí u ám sau sự kiện Infinity War và quyết tâm đảo ngược tình thế của các anh hùng còn sống sót.",
        watchUrl: "https://www.youtube.com/watch?v=TcMBFSGVi1c"
    },
    {
        id: "hA6hldpSTF8",
        title: "Avengers: Endgame Official Trailer 2",
        caption: "Trailer chính thức 2 — Khẳng định tinh thần 'Whatever It Takes' với sự hội tụ của dàn siêu anh hùng trong bộ giáp lượng tử mới.",
        watchUrl: "https://www.youtube.com/watch?v=hA6hldpSTF8"
    }
];

function createFallbackAvatar(name) {
    const initials = name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map(part => part[0].toUpperCase())
        .join("");

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="400" viewBox="0 0 300 400">
        <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#181c26"/>
                <stop offset="100%" stop-color="#0d1017"/>
            </linearGradient>
        </defs>
        <rect width="300" height="400" fill="url(#g)"/>
        <circle cx="150" cy="175" r="56" fill="#232938" stroke="#d9ae4e" stroke-width="2"/>
        <text x="150" y="191" font-family="sans-serif" font-size="38" font-weight="700" fill="#ecc76e" text-anchor="middle">${initials}</text>
        <text x="150" y="285" font-family="sans-serif" font-size="14" fill="#aba498" text-anchor="middle">${name}</text>
    </svg>`;
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const navToggle = document.getElementById("nav-toggle");
    const navLinks = document.getElementById("nav-links");
    const navAnchors = Array.from(document.querySelectorAll(".nav-links a"));
    const scrollProgress = document.getElementById("scroll-progress");

    const actorsContainer = document.getElementById("actors");
    const castSearch = document.getElementById("cast-search");
    const castSearchClear = document.getElementById("cast-search-clear");
    const filterTabs = Array.from(document.querySelectorAll(".filter-tab"));
    const castStatus = document.getElementById("cast-status");
    const castEmpty = document.getElementById("cast-empty");
    const castResetBtn = document.getElementById("cast-reset-btn");
    const castToggleAllBtn = document.getElementById("cast-toggle-all");

    const storyChaptersContainer = document.getElementById("movie-content");
    const storyChapters = Array.from(document.querySelectorAll(".story-chapter"));
    const chapterNav = document.getElementById("chapter-nav");
    const chapterPills = Array.from(document.querySelectorAll(".chapter-pill"));
    const chapterPager = document.getElementById("chapter-pager");
    const chapterPrev = document.getElementById("chapter-prev");
    const chapterNext = document.getElementById("chapter-next");
    const chapterIndicator = document.getElementById("chapter-indicator");
    const storyModeStepper = document.getElementById("story-mode-stepper");
    const storyModeFull = document.getElementById("story-mode-full");
    const spoilerToggle = document.getElementById("spoiler-toggle");

    const trailerTabs = Array.from(document.querySelectorAll(".trailer-tab"));
    const trailerIframe = document.getElementById("trailer-iframe");
    const trailerCaption = document.getElementById("trailer-caption");
    const trailerExternalLink = document.getElementById("trailer-external-link");

    const posterZoomBtn = document.getElementById("poster-zoom-btn");
    const backToTopBtn = document.getElementById("back-to-top");

    const modalBackdrop = document.getElementById("modal-backdrop");
    const modalBody = document.getElementById("modal-body");
    const modalClose = document.getElementById("modal-close");

    // State
    let activeGroup = "all";
    let searchQuery = "";
    let showAllDefault = false;
    let currentFilteredActors = actors.slice();
    let currentModalActorIdx = -1;
    let lastFocusedElement = null;

    let currentChapter = 0;
    let isFullStoryMode = false;
    let hideSpoilers = false;

    // 1. Mobile Navigation & Scroll Tracking
    if (navToggle && navLinks) {
        navToggle.addEventListener("click", () => {
            const expanded = navToggle.getAttribute("aria-expanded") === "true";
            navToggle.setAttribute("aria-expanded", String(!expanded));
            navLinks.classList.toggle("is-open", !expanded);
        });

        navAnchors.forEach(anchor => {
            anchor.addEventListener("click", () => {
                navToggle.setAttribute("aria-expanded", "false");
                navLinks.classList.remove("is-open");
            });
        });
    }

    const sections = ["intro", "cast", "story", "reception", "trailers"]
        .map(id => document.getElementById(id))
        .filter(Boolean);

    function updateScrollUI() {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? Math.min(100, Math.max(0, (window.scrollY / docHeight) * 100)) : 0;
        if (scrollProgress) {
            scrollProgress.style.width = `${progress}%`;
        }

        const scrollOffset = window.scrollY + 130;
        let currentId = "";
        for (const sec of sections) {
            if (sec.offsetTop <= scrollOffset) {
                currentId = sec.id;
            }
        }
        navAnchors.forEach(a => {
            const isMatch = a.getAttribute("href") === `#${currentId}`;
            a.classList.toggle("is-active", isMatch);
        });
    }

    window.addEventListener("scroll", updateScrollUI, { passive: true });
    updateScrollUI();

    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // 2. Cast Search, Filter, Expand & Modal
    function normalizeText(value) {
        return value
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
    }

    function renderActors() {
        const query = normalizeText(searchQuery.trim());
        currentFilteredActors = actors.filter(actor => {
            const groupOk = activeGroup === "all" || actor.group === activeGroup;
            if (!groupOk) return false;
            if (!query) return true;
            return (
                normalizeText(actor.name).includes(query) ||
                normalizeText(actor.role).includes(query)
            );
        });

        const shouldLimit = activeGroup === "all" && !query && !showAllDefault;
        const limitCount = 10;
        const visibleActors = shouldLimit
            ? currentFilteredActors.slice(0, limitCount)
            : currentFilteredActors;

        actorsContainer.innerHTML = "";

        if (currentFilteredActors.length === 0) {
            castEmpty.hidden = false;
            castToggleAllBtn.hidden = true;
            castStatus.textContent = "Không tìm thấy kết quả phù hợp.";
            return;
        }

        castEmpty.hidden = true;

        visibleActors.forEach(actor => {
            const card = document.createElement("button");
            card.type = "button";
            card.className = "actor-card";
            card.setAttribute("aria-label", `Xem chi tiết ${actor.name} vai ${actor.role}`);

            const media = document.createElement("div");
            media.className = "actor-media";

            const img = document.createElement("img");
            img.src = actor.img;
            img.alt = `${actor.name} — ${actor.role}`;
            img.loading = "lazy";
            img.addEventListener("error", () => {
                if (!img.dataset.fallbackApplied) {
                    img.dataset.fallbackApplied = "1";
                    img.src = createFallbackAvatar(actor.name);
                }
            });

            const badge = document.createElement("span");
            badge.className = "actor-badge";
            badge.textContent = actor.groupLabel;

            media.appendChild(img);
            media.appendChild(badge);

            const info = document.createElement("div");
            info.className = "actor-info";

            const h3 = document.createElement("h3");
            h3.textContent = actor.name;

            const p = document.createElement("p");
            p.textContent = actor.role;

            info.appendChild(h3);
            info.appendChild(p);

            card.appendChild(media);
            card.appendChild(info);

            card.addEventListener("click", () => {
                const idx = currentFilteredActors.indexOf(actor);
                openActorModal(idx);
            });

            actorsContainer.appendChild(card);
        });

        if (activeGroup === "all" && !query && currentFilteredActors.length > limitCount) {
            castToggleAllBtn.hidden = false;
            castToggleAllBtn.textContent = showAllDefault
                ? "Thu gọn danh sách"
                : `Xem đầy đủ ${currentFilteredActors.length} diễn viên`;
        } else {
            castToggleAllBtn.hidden = true;
        }

        castStatus.textContent = `Đang hiển thị ${visibleActors.length} / ${currentFilteredActors.length} diễn viên`;
    }

    filterTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            activeGroup = tab.dataset.filter || "all";
            filterTabs.forEach(btn => {
                const active = btn === tab;
                btn.classList.toggle("is-active", active);
                btn.setAttribute("aria-selected", String(active));
            });
            renderActors();
        });
    });

    castSearch.addEventListener("input", () => {
        searchQuery = castSearch.value;
        castSearchClear.hidden = searchQuery.length === 0;
        renderActors();
    });

    castSearchClear.addEventListener("click", () => {
        castSearch.value = "";
        searchQuery = "";
        castSearchClear.hidden = true;
        castSearch.focus();
        renderActors();
    });

    castResetBtn.addEventListener("click", () => {
        castSearch.value = "";
        searchQuery = "";
        castSearchClear.hidden = true;
        activeGroup = "all";
        filterTabs.forEach(btn => {
            const active = btn.dataset.filter === "all";
            btn.classList.toggle("is-active", active);
            btn.setAttribute("aria-selected", String(active));
        });
        renderActors();
    });

    castToggleAllBtn.addEventListener("click", () => {
        showAllDefault = !showAllDefault;
        renderActors();
    });

    renderActors();

    // 3. Modal (Actor Details + Poster Lightbox)
    function openModal(contentNode) {
        lastFocusedElement = document.activeElement;
        modalBody.innerHTML = "";
        modalBody.appendChild(contentNode);
        modalBackdrop.hidden = false;
        document.body.style.overflow = "hidden";
        modalClose.focus();
    }

    function closeModal() {
        modalBackdrop.hidden = true;
        document.body.style.overflow = "";
        currentModalActorIdx = -1;
        if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
            lastFocusedElement.focus();
        }
    }

    function openActorModal(index) {
        if (index < 0 || index >= currentFilteredActors.length) return;
        currentModalActorIdx = index;
        const actor = currentFilteredActors[index];

        const wrapper = document.createElement("div");
        wrapper.className = "modal-actor-layout";

        const img = document.createElement("img");
        img.className = "modal-actor-img";
        img.src = actor.img;
        img.alt = actor.name;
        img.addEventListener("error", () => {
            img.src = createFallbackAvatar(actor.name);
        });

        const details = document.createElement("div");
        details.className = "modal-actor-details";

        const tag = document.createElement("span");
        tag.className = "modal-tag";
        tag.textContent = actor.groupLabel;

        const title = document.createElement("h3");
        title.id = "modal-title";
        title.textContent = actor.name;

        const role = document.createElement("p");
        role.className = "modal-role";
        role.textContent = actor.role;

        const note = document.createElement("p");
        note.className = "modal-note";
        note.textContent = actor.bio;

        const navWrap = document.createElement("div");
        navWrap.className = "modal-nav";

        const prevBtn = document.createElement("button");
        prevBtn.type = "button";
        prevBtn.className = "btn btn-secondary btn-sm";
        prevBtn.textContent = "← Diễn viên trước";
        prevBtn.disabled = currentFilteredActors.length <= 1;
        prevBtn.addEventListener("click", () => {
            const prevIdx = (currentModalActorIdx - 1 + currentFilteredActors.length) % currentFilteredActors.length;
            openActorModal(prevIdx);
        });

        const nextBtn = document.createElement("button");
        nextBtn.type = "button";
        nextBtn.className = "btn btn-secondary btn-sm";
        nextBtn.textContent = "Diễn viên tiếp theo →";
        nextBtn.disabled = currentFilteredActors.length <= 1;
        nextBtn.addEventListener("click", () => {
            const nextIdx = (currentModalActorIdx + 1) % currentFilteredActors.length;
            openActorModal(nextIdx);
        });

        navWrap.appendChild(prevBtn);
        navWrap.appendChild(nextBtn);

        details.appendChild(tag);
        details.appendChild(title);
        details.appendChild(role);
        details.appendChild(note);
        details.appendChild(navWrap);

        wrapper.appendChild(img);
        wrapper.appendChild(details);

        openModal(wrapper);
    }

    if (posterZoomBtn) {
        posterZoomBtn.addEventListener("click", () => {
            const box = document.createElement("div");
            box.style.textAlign = "center";

            const heading = document.createElement("h3");
            heading.id = "modal-title";
            heading.textContent = "Poster chính thức — Avengers: Endgame (2019)";
            heading.style.marginBottom = "16px";
            heading.style.fontSize = "1.1rem";

            const posterImg = document.createElement("img");
            posterImg.className = "modal-poster-img";
            posterImg.src = "https://cdn.marvel.com/content/2x/avengersendgame_lob_crd_05.jpg";
            posterImg.alt = "Poster chính thức Avengers: Endgame";

            box.appendChild(heading);
            box.appendChild(posterImg);
            openModal(box);
        });
    }

    modalClose.addEventListener("click", closeModal);
    modalBackdrop.addEventListener("click", event => {
        if (event.target === modalBackdrop) {
            closeModal();
        }
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && !modalBackdrop.hidden) {
            closeModal();
        }
    });

    // 4. Story Timeline Stepper & Spoiler Guard
    function updateStoryUI() {
        storyChaptersContainer.classList.toggle("is-full-mode", isFullStoryMode);
        chapterNav.hidden = isFullStoryMode;
        chapterPager.hidden = isFullStoryMode;

        storyModeStepper.classList.toggle("is-active", !isFullStoryMode);
        storyModeStepper.setAttribute("aria-pressed", String(!isFullStoryMode));
        storyModeFull.classList.toggle("is-active", isFullStoryMode);
        storyModeFull.setAttribute("aria-pressed", String(isFullStoryMode));

        storyChapters.forEach((chapter, idx) => {
            chapter.classList.toggle("is-visible", idx === currentChapter);
        });

        chapterPills.forEach((pill, idx) => {
            pill.classList.toggle("is-active", idx === currentChapter);
        });

        chapterPrev.disabled = currentChapter === 0;
        chapterNext.disabled = currentChapter === storyChapters.length - 1;
        chapterIndicator.textContent = `Chương ${currentChapter + 1} / ${storyChapters.length}`;
    }

    chapterPills.forEach(pill => {
        pill.addEventListener("click", () => {
            currentChapter = Number(pill.dataset.chapter || 0);
            updateStoryUI();
        });
    });

    chapterPrev.addEventListener("click", () => {
        if (currentChapter > 0) {
            currentChapter -= 1;
            updateStoryUI();
        }
    });

    chapterNext.addEventListener("click", () => {
        if (currentChapter < storyChapters.length - 1) {
            currentChapter += 1;
            updateStoryUI();
        }
    });

    storyModeStepper.addEventListener("click", () => {
        isFullStoryMode = false;
        updateStoryUI();
    });

    storyModeFull.addEventListener("click", () => {
        isFullStoryMode = true;
        updateStoryUI();
    });

    spoilerToggle.addEventListener("click", () => {
        hideSpoilers = !hideSpoilers;
        spoilerToggle.classList.toggle("is-active", hideSpoilers);
        spoilerToggle.setAttribute("aria-pressed", String(hideSpoilers));
        spoilerToggle.textContent = hideSpoilers
            ? "Đang che nội dung hồi kết (Nhấn để tắt)"
            : "Che nội dung hồi kết (Spoiler)";
        storyChaptersContainer.classList.toggle("hide-spoilers", hideSpoilers);

        if (!hideSpoilers) {
            document.querySelectorAll(".spoiler-sensitive").forEach(el => {
                el.classList.remove("spoiler-revealed");
            });
        }
    });

    document.querySelectorAll(".spoiler-sensitive .spoiler-content").forEach(box => {
        box.addEventListener("click", () => {
            if (hideSpoilers) {
                box.closest(".spoiler-sensitive").classList.add("spoiler-revealed");
            }
        });
    });

    updateStoryUI();

    // 5. Trailer Switcher
    trailerTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const idx = Number(tab.dataset.trailer || 0);
            const selected = trailers[idx];
            if (!selected) return;

            trailerTabs.forEach(btn => {
                const isSelected = btn === tab;
                btn.classList.toggle("is-active", isSelected);
                btn.setAttribute("aria-selected", String(isSelected));
            });

            trailerIframe.src = `https://www.youtube.com/embed/${selected.id}`;
            trailerIframe.title = selected.title;
            trailerCaption.textContent = selected.caption;
            trailerExternalLink.href = selected.watchUrl;
        });
    });
});
