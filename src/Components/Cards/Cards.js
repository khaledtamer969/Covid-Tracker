import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import style from "./Cards.module.css";
import CountUp from "react-countup";
import cx from 'classnames';
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
	if (!confirmed) {
		return "Loading.....";
	}

	return (
		<div className={style.container}>
		
			<Grid container spacing={3} xs={12} justify="center">
				<Grid item component={Card}  className={cx(style.card, style.infected)}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							<CountUp
								start={0}
								end={confirmed.value}
								duration={2.5}
								separator=","
							></CountUp>{" "}
						</Typography>
						<Typography variant="h5">
							{new Date(lastUpdate).toDateString()}{" "}
						</Typography>
						<Typography color="textSecondary">Real Data</Typography>
						<Typography variant="body2">
							Number of Active covid Cases
						</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card}  className={cx(style.card, style.recovered)}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							
							<CountUp
								start={0}
								end={recovered.value}
								duration={2.5}
								separator=","
							> </CountUp>
							
						</Typography>
						
						<Typography variant="h5">
							{new Date(lastUpdate).toDateString()}{" "}
						</Typography>
						<Typography color="textSecondary">Real Data</Typography>
						<Typography variant="body2">
							Number of Recovered covid Cases
						</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card} className={cx(style.card, style.deaths)}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							<CountUp
								start={0}
								end={deaths.value}
								duration={2.5}
								separator=","
							></CountUp>
						</Typography>
						<Typography variant="h5">
							{new Date(lastUpdate).toDateString()}{" "}
						</Typography>
						<Typography color="textSecondary">Real Data</Typography>
						<Typography variant="body2">
							Number of Deaths covid Cases
						</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</div>
	);
};

export default Cards;
