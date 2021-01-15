import { Card, Col, Icon, Row, Tooltip } from 'antd';
import Search from 'antd/lib/input/Search';
import { Meta } from 'antd/lib/list/Item';
import axios from 'axios';
import React, { useState } from 'react';

const GithubBattlePage = () => {
    const [ user1, setUser1 ] = useState(null);
    const [ user2, setUser2 ] = useState(null);

    const fetchProfile1 = (value) => {
        axios.get(`https://api.github.com/users/${value}`)
        .then(data => {
            setUser1(data.data);
        });
    }

    const fetchProfile2 = (value) => {
        axios.get(`https://api.github.com/users/${value}`)
        .then(data => {
            setUser2(data.data);
        });
    }

    return (
        <div className="instructions-container">
			<h1 className="center-text header-lg">Let's Begin Battle</h1>
			<Row>
				<Col span={12}>
					<div className="user-grid">
						<h5>User 1 Github Username</h5>
						<Search
							onSearch={fetchProfile1}
							placeholder="Enter your username"
							prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
							suffix={
								<Tooltip title="Extra information">
									<Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
								</Tooltip>
							}
						/>
                        {user1 && (
                            <Card
                                cover={<img alt="example" src={user1.avatar_url} />}
                            >
                                <p><b>Name</b> {user1.name}</p>
                                <p><b>Location</b> {user1.location}</p>
                                <Meta
                                    title={user1.public_repos}
                                    description={user1.followers}
                                />
                            </Card>
                        )}
						
					</div>
				</Col>
				<Col span={12}>
					<div className="user-grid">
						<h5>User 2 Github Username</h5>
						<Search
							onSearch={fetchProfile2}
							placeholder="Enter your username"
							prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
							suffix={
								<Tooltip title="Extra information">
									<Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
								</Tooltip>
							}
						/>
                        {user2 && (
                            <Card
							cover={<img alt="example" src={user2.avatar_url} />}
                            >
                                <p><b>Name</b> {user2.name}</p>
                                <p><b>Location</b> {user2.location}</p>
                                <Meta
                                    title={user2.public_repos}
                                    description={user2.followers}
                                />
                            </Card>
                        )}
					</div>
				</Col>
			</Row>
		</div>
    )

}

export default GithubBattlePage;