import React from "react";
import Grid from "@mui/material/Grid";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { IMG_URL } from "../constans/API";
import { useNavigate } from "react-router-dom";

export const MovieList = (props) => {
  const navigate = useNavigate();
  const { moviesList } = props;
  console.log("props", props);

  return (
    <Grid style={{ padding: "50px 25px" }} container spacing={2}>
      {moviesList?.map((movie, idx) => (
        <Grid item xs={12} md={2.4} lg={2.4}>
          <div
            id={idx}
            onClick={() => navigate(`/movie-details?id=${movie?.id}`)}
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 350 }}
                image={IMG_URL + movie?.poster_path}
                title="green iguana"
              />
              <CardContent className="movie-card-content">
                <Typography className="typo" gutterBottom>
                  {movie?.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {movie?.release_date}
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};
