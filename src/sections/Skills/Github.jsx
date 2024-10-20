import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
    const selectLastSixMonths = contributions => {
        const b = contributions.filter(activity => {
            const date = new Date(activity.date);
            const dateNow = Date.now() - 6 * 30.4 * 24 * 60 * 60 * 1000
            const c = date.getTime() >= dateNow ? true : false;
            return c;
        });
        return b
    };


    return (
        <GitHubCalendar
            username="1ashutoshverma"
            transformData={selectLastSixMonths}
            labels={{
                totalCount: '{{count}} commits in last 6 months',
            }}
            blockSize={19}
            blockMargin={5}
            fontSize={20}
            hideTotalCount={true}
            theme={{
                "light": [
                    "hsl(0, 0%, 92%)",
                    "rebeccapurple"
                ],
                "dark": [
                    "hsl(0, 0%, 10%)",
                    "#8667D9"
                ]
            }}
            style={{
                color: "#854CE6",
                margin: "auto",
                padding: "15px",
            }}
        />
    );
}

export default Github;
