const allFilters = {
    status: {
        All: { check: true, label: "All" },
        Active: { check: false, label: "Active" },
        Upcoming: { check: false, label: "Upcoming" },
        Past: { check: false, label: "Past" }
    },
    level: {
        Easy: { check: false, label: "Easy" },
        Medium: { check: false, label: "Medium" },
        Hard: { check: false, label: "Hard" }
    }
}

export default allFilters