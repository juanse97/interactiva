import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { SeriesItem } from "./SeriesItem";
/* Stateful */
export const SeriesGrid = () => {

    const [series, setSeries] = useState([])

    useEffect(() => {
        getSeries();
    }, [])
    const baseUrl = 'https://gateway.marvel.com/';
    const ts = "1000"
    const hash = "982e8f459066701df80f3f28b11b30c3"
    const key = "44fd37ae02fb7ed960e594577f2b88d4"
    const limit = "30";
    const getSeries = async () => {

        const resp = await fetch(`${baseUrl}v1/public/series?ts=${ts}&apikey=${key}&hash=${hash}&limit=${limit}&orderBy=modified`);
        const list = await resp.json();
        let { data } = list;
        data = data.results

        const listData = data.map(serie => {
            return {
                id: serie.id,
                title: serie.title,
                img: serie.thumbnail,
                url: serie.urls
            }
        });
        setSeries(listData);
    }



    return (
        <Container>

            <div className="card-grid">
                {
                    series.map(serie => (
                        <SeriesItem key={serie.id} series={serie} />
                    ))
                }
            </div>
        </Container >

    )
}
