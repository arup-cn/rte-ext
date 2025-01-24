import DataSetIcon from './DataSetIcon';
import CloseIcon from './CloseIcon';
import { NodeViewComponentProps } from '@remirror/react';
import '../index.css';

function Button({ node, getPosition, view }: NodeViewComponentProps) {
  const { name } = node.attrs;

  const handleRemoveNode = () => {
    const pos = getPosition();
    if (typeof pos === 'number') {
      const tr = view.state.tr.delete(pos, pos + node.nodeSize);
      view.dispatch(tr);
    } else {
      console.error('Failed to get position');
    }
  };

  return (
    <span
      style={{
        display: 'inline-block',
        borderRadius: '6px',
        backgroundColor: '#444444',
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
            backgroundColor: '#363636',
            padding: '4px 8px',
            borderTopLeftRadius: '6px',
            borderBottomLeftRadius: '6px',
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
          onClick={handleRemoveNode}
        >
          <CloseIcon height={20} width={20} />
        </span>
      </span>
    </span>
  );
}

export default Button;
