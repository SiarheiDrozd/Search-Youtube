import {ComponentConstants} from "../constants";
import globalVariables from "../variables";

export default function (event) {
    if (globalVariables.isMouseDown) {
        let posX = event.clientX || event.changedTouches[0].pageX;
        let dX = posX - globalVariables.mouseDownPosX;

        event.currentTarget.style.transition = ComponentConstants.DEFAULT_TRANSITION;
        event.currentTarget.style.transform = `translate3d(${globalVariables.layerPosition + dX}px, 0, 0)`;
    }
}
