class PlayerList extends React.Component {
    state = {
        players: [],
    };

    componentDidMount() {
        this.setState({ players: MockApi.players });
    }

    handlePlayerUpVote = (playerId) => {
        const nextPlayers = this.state.players.map((player) => {
            if (player.id === playerId) {
                return Object.assign({}, player, {
                    votes: player.votes + 1,
                });
            } else {
                return player;
            }
        });

        this.setState({
            players: nextPlayers,
        })
    };

    render() {
        const players = this.state.players.sort((a, b) => (
            b.votes - a.votes
        ));
        const playerComponents = players.map((player) => (
            <Player
                key={'player-' + player.id}
                id={player.id}
                title={player.title}
                description={player.description}
                url={player.url}
                votes={player.votes}
                dob={player.dob}
                playerImageUrl={player.playerImageUrl}
                onVote={this.handlePlayerUpVote}
            />
        ));
        return (
            <div className='ui unstackable items'>
                {playerComponents}
            </div>
        );
    }
}

class Player extends React.Component {
    handleUpVote = () => {
        this.props.onVote(this.props.id);
    };

    render() {
        return (
            <div className='item'>
                <div className='image'>
                    <img src={this.props.playerImageUrl} />
                </div>
                <div className='middle aligned content'>
                    <a onClick={this.handleUpVote}>
                        <i className='large caret up icon' />
                        {this.props.votes}
                    </a>
                    <div className='description'>
                        <a href={this.props.url}>
                            {this.props.title}
                        </a>
                        <p>{this.props.description}</p>
                    </div>
                    <div className='extra'>
                        <span>Date of Birth:</span><span>{this.props.dob}</span>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<PlayerList />, document.getElementById('content'));
