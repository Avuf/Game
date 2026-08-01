// admin_levels.js - Admin Config for Levels 1 to 100
const ADMIN_LEVEL_DATA = [
    { level: 1, name: "Cherry Blossoms", image: "https://images.unsplash.com/photo-1528164344705-475426879e0d?w=600", grid: 3 },
    { level: 2, name: "Tokyo Night", image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=600", grid: 3 },
    { level: 3, name: "Mount Fuji", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600", grid: 3 },
    { level: 4, name: "Shrine Gate", image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600", grid: 4 }
];

// Dynamically generate template slots up to 100 levels
function getFullLevelList() {
    const fullList = [...ADMIN_LEVEL_DATA];
    for (let i = fullList.length + 1; i <= 100; i++) {
        fullList.push({
            level: i,
            name: `Level ${i}`,
            image: `https://picsum.photos/seed/anime${i}/600/600`,
            grid: i > 50 ? 4 : 3
        });
    }
    return fullList;
}

window.GAME_LEVELS = getFullLevelList();
