import DataSetIcon from './DataSetIcon';
import CloseIcon from './CloseIcon';
import { NodeViewComponentProps } from '@remirror/react';

function Button({ node }: NodeViewComponentProps) {
  const { name } = node.attrs;

  return (
    <span className="element-spec" contentEditable="false" draggable="false">
      <span className="element-spec-content">
        <span className="element-spec-icon">
          <DataSetIcon height={20} width={20} />
        </span>
        {name}
        <span
          className="element-close-icon"
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
