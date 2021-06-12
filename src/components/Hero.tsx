import React from 'react';

interface IHeroProps {
    title?: string;
    subtitle?: string;
}

export class Hero extends React.Component<IHeroProps> {
    render() {
        return (
            <section className="hero is-primary">
                <div className="hero-body">
                    <h1 className="title">
                        { this.props.title }
                    </h1>
                    <h2 className="subtitle">
                        { this.props.subtitle }
                    </h2>
                </div>
            </section>
        );
    }
}