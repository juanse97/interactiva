import PropTypes from 'prop-types';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
/* Stateless */

export const SeriesItem = ({ series: serie }) => {
    return (
        <>
            <Card key={serie.id} className="series-card" sx={{ width: 345 }}>
                <CardActionArea href={serie.url[0].url} target="_blank" >
                    <CardMedia
                        component="img"
                        width="315"
                        height="100%"
                        image={`${serie.img.path}.${serie.img.extension}`}
                        alt={serie.title}
                        loading="lazy"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            {serie.title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

        </>
    )
}

SeriesItem.propTypes = {
    serie: PropTypes.oneOfType([
        PropTypes.number.isRequired,
        PropTypes.string.isRequired,
        PropTypes.string.isRequired,
        PropTypes.array.isRequired
      ]),
}

export default SeriesItem;
