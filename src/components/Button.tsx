import DataSetIcon from './DataSetIcon';
import CloseIcon from './CloseIcon';
import { NodeViewComponentProps } from '@remirror/react';
import '../index.css';

function Button({ node }: NodeViewComponentProps) {
  const { name } = node.attrs;

  return (
    <span
      style={{
        display: 'inline-block',
        borderRadius: '10px',
        backgroundColor: '#7a7a7a',
      }}
      contentEditable="false"
      draggable="false"
    >
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          width: 'fit-content',
          fontWeight: 'bold',
          textTransform: 'capitalize',
          fontFamily: "'Rubik', sans-serif",
          color: '#FFF',
          fontSize: '16px',
        }}
      >
        <span
          style={{
            minHeight: '20px',
            minWidth: '20px',
            display: 'flex',
            backgroundColor: '#282828',
            padding: '4px 8px',
            borderTopLeftRadius: '12px',
            borderBottomLeftRadius: '12px',
          }}
        >
          <DataSetIcon height={20} width={20} />
        </span>
        {name}
        <span
          style={{
            minHeight: '20px',
            minWidth: '20px',
            display: 'flex',
            cursor: 'pointer',
            padding: '4px 8px',
          }}
          onClick={() => {
            console.log('removed');
          }}
        >
          <CloseIcon height={20} width={20} />
        </span>
      </span>
    </span>
  );
}

export default Button;
