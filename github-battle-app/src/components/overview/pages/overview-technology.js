import { Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import RepoList from './repo-list';
import axios from 'axios';

const OverviewTechnology = (props) => {
    const [ repos, setRepos ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        const {name} = props.match.params;
        const value = name !== "all" ? name: "js";
        fetchRepos(value);

        return () => null;
    },[props.match.params.name]);

    const fetchRepos = (tag) => {
        const techTag = tag !== 'all' ? `language:${tag}` : '';
		return axios({
			method: 'get',
			url: `https://api.github.com/search/repositories?q=stars:%3E1+${techTag}&sort=stars&order=desc&type=Repositories`,
		}).then((response) => {
			setRepos(response.data.items);
			setLoading(false);
		}).catch(() => {
			setLoading(false);
		});
    }

    const ReposComp = <RepoList repos={repos} />
    return (
        <>
            {!loading ? ReposComp : <Spin />}
        </>
    )

}

export default OverviewTechnology;