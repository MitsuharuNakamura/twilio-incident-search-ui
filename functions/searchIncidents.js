exports.handler = async function (context, event, callback) {
    const axios = require("axios");
    const response = new Twilio.Response();

    // Enable CORS
    response.appendHeader("Access-Control-Allow-Origin", "*");
    response.appendHeader("Content-Type", "application/json");

    const searchWord = event.searchWord || ""; // 検索キーワード
    const maxPages = parseInt(event.maxPages || "1", 10); // ページ数
    const baseUrl = "https://status.twilio.com/history";

    try {
        let results = [];

        for (let page = 1; page <= maxPages; page++) {
            const url = `${baseUrl}?page=${page}`;
            const res = await axios.get(url);

            // HTMLのパース
            const matches = res.data.match(/data-react-props="([^"]*)"/);
            if (matches && matches[1]) {
                const jsonData = JSON.parse(matches[1].replace(/&quot;/g, '"'));

                if (jsonData.months) {
                    jsonData.months.forEach((month) => {
                        if (month.incidents) {
                            month.incidents.forEach((incident) => {
                                const name = incident.name || "";
                                const message = incident.message || "";
                                const timestamp = incident.timestamp || "";
                                const code = incident.code || ""; // codeの値を取得

                                // キーワードでフィルタリング
                                if (
                                    name.toLowerCase().includes(searchWord.toLowerCase()) ||
                                    message.toLowerCase().includes(searchWord.toLowerCase())
                                ) {
                                    results.push({ name, message, timestamp, code }); // codeを結果に追加
                                }
                            });
                        }
                    });
                }
            }
        }

        response.setBody({ success: true, data: results });
    } catch (error) {
        response.setBody({ success: false, error: error.message });
    }

    return callback(null, response);
};
