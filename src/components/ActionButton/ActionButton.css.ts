import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css";

export const tastButton = style({
    display: 'flex',
    alignItems: 'center',
    height: 'max-content',
    borderRadius: 4,
    marginTop: vars.spacing.small,
    fontSize: vars.fontSizing.T3,
    padding: vars.spacing.medium,
    cursor: 'pointer',
    ':hover':{
        backgroundColor: vars.color.secondaryDarkText
    }
})

export const listButton = style({
    display: 'flex',
    alignItems: 'center',
    height: 'max-content',
    borderRadius: 4,
    marginTop: vars.spacing.small,
    fontSize: vars.fontSizing.T3,
    cursor: 'pointer',
    ':hover':{
        backgroundColor: vars.color.mainFadedBright
    },
    minWidth: vars.minWidth.list,
    color: vars.color.brightText,
    backgroundColor: vars.color.mainFaded,
    paddingTop: vars.spacing.small,
    paddingBottom: vars.spacing.small,
    paddingRight: vars.spacing.big2,
    paddingLeft: vars.spacing.big2
})