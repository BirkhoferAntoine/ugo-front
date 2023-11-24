import { SxStylesObject } from '../../../types/types.ts';

export const sxStyles: SxStylesObject = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        minWidth: '60vw',
    },
    paper: {
        padding: 4,
        position: 'relative',
        boxShadow: '20px 20px 60px #a5a5a5, -20px -20px 60px #ffffff;',
        borderRadius: '50px',
        background: 'linear-gradient(145deg, #f3f3f3, #E1E1E1)',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: '82vw',
        minWidth: '60vw',
        minHeight: '60vh',
    },
    title: {
        justifySelf: 'flex-start',
    },
    tableContainer: {
        alignSelf: 'center',
        height: '100%',
        borderRadius: '50px',
        background: '#f3f3f3',
        boxShadow: '20px 20px 60px #cfcfcf, -20px -20px 60px #ffffff',
        padding: '1em 1em 0 1em',
        transition: 'width 0.5s ease-out',
        maxWidth: '80vw',
        minWidth: '60vw',
        minHeight: '50vh',
    },
};
