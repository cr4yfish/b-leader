"use client"

import Link from "next/link"
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";

import { IFullUser, IScore, IScores } from "bleader";
import { GetFullPlayerData } from "@/functions/database";

import "material-icons/iconfont/material-icons.css"
import styles from "./styles.module.css"


export default function User({
    params, searchParams
} : {
    params: { slug: string }
    searchParams: URLSearchParams
}) {

    const [user, setUser] = useState({} as IFullUser)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        GetFullPlayerData(params.slug).then((data) => {
            setUser(data)
            setLoading(false);
        });
    }, [])


    return (
        <>

        <div style={{ display: "flex", flexDirection: "row", padding: "1rem", justifyContent: "center" }}>
            
            {!loading && <div id="UserStats" style={{ display: "flex", flexDirection: "column" }}>
                
                <div id="User" style={{ display: "flex", flexDirection: "row", gap: "1rem", alignItems: "center" }}>

                    <div id="UserAvatar" style={{ display: "flex", flexDirection: "column" }}>
                        {!loading && <Image width={100} height={100} alt={user.name} src={user.avatar} style={{ borderRadius: "50%", border: "1px solid white" }} />}
                    </div>

                    <div id="UserInfo" style={{ display: "flex", flexDirection: "column", gap: ".33rem" }}>
                        
                        <div className={styles.userInfoContainer} >
                            <h1>{user.name}</h1>
                            <span style={{ background: "white", color: "black", padding: ".25rem .5rem", borderRadius: "var(--borderRadius)" }}>{user.pp}pp</span>
                        </div>

                        <div className={styles.userInfoContainer}>
                            <span>#{user.rank}</span>
                            <span style={{ display: "flex", alignItems: "center", gap: ".25rem" }}>
                                <ReactCountryFlag countryCode={user.country} svg aria-label={user.country} /> 
                                #{user.countryRank}
                            </span>
                        </div>

                        <div className={styles.userInfoContainer}>

                            <div className={styles.userInfoScoreStats} >
                                <span>Top pp</span>
                                <span>{Math.round(user.scoreStats?.topPp)}pp</span>
                            </div>

                            <div className={styles.userInfoScoreStats} >
                                <span>Average ranked accuracy</span>
                                <span>{Math.round(user.scoreStats?.averageRankedAccuracy*100)}%</span>
                            </div>

                        </div>

                    </div>
                </div>

                <div id="SongList" className={styles.userSongList}>
                    <table>
                        <thead>
                            <tr>
                                <th style={{ width: "50px" }}></th>
                                <th scope="col"><div>Song <span className="material-icons">keyboard_arrow_down</span></div></th>
                                <th scope="col"><div>Points <span className="material-icons">keyboard_arrow_down</span></div></th>
                                <th scope="col"><div>Accuracy <span className="material-icons">keyboard_arrow_down</span></div></th>
                                <th scope="col"><div>Score <span className="material-icons">keyboard_arrow_down</span></div></th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {user.scores?.data?.map((score, index) => (
                                    <tr key={index} className={styles.songListEntry}>
                                        <td style={{ width: "50px" }}>#{score.rank}</td>
                                        <td>
                                            <div style={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
                                                <div>
                                                    <Image 
                                                        width={50} height={50}
                                                        alt={score.leaderboard.song.name} src={score.leaderboard.song.coverImage}
                                                        style={{ borderRadius: "var(--borderRadius)" }}
                                                        />
                                                </div>
                                                <div>
                                                    <span style={{ fontSize: "14pt", fontWeight: "700" }}>{score.leaderboard.song.name}</span>
                                                    <div style={{ display: "flex", flexDirection: "row", gap: ".5rem", fontSize: "10pt", fontWeight: "400" }}>
                                                        <span>{score.leaderboard.song.author}</span>
                                                        <span style={{ color: "#8283A3" }}>{score.leaderboard.song.mapper}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{Math.round(score.pp)}pp</td>
                                        <td>{Math.round(score.accuracy*100)}%</td>
                                        <td>{score.modifiedScore}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

            </div>}

            <div id="Rankings" style={{ display: "flex", flexDirection: "column" }}>

            </div>
           
        </div>

        </>
    )
}