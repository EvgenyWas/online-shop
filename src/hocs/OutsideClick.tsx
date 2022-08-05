import { Component, createRef, Fragment, LegacyRef, ReactElement, RefObject } from "react";

type Props = {
    children: ReactElement,
    handler: (event: MouseEvent | TouchEvent | KeyboardEvent) => void
}

export default class OutsideClick extends Component<Props> {
    wrapperRef: RefObject<HTMLDivElement> | undefined;  
    constructor(props: Props) {
        super(props);

        this.wrapperRef = createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
        document.addEventListener('touchstart', this.handleClickOutside);
        document.addEventListener('keydown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
        document.removeEventListener('touchstart', this.handleClickOutside);
        document.removeEventListener('keydown', this.handleClickOutside);
    }

    handleClickOutside(event: MouseEvent | TouchEvent | KeyboardEvent) {
        if (!this.wrapperRef?.current) {
            return;
        } else if (event instanceof KeyboardEvent && event.key === 'Escape') {
            this.props.handler(event);
        } else if (this.wrapperRef.current.contains(event.target as Node)) {
            return;
        };
        
        this.props.handler(event);
    }

    render() {
        return (
            <div ref={this.wrapperRef}>
                {this.props.children}
            </div>
        )
    }
}