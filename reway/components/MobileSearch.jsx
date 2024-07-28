import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-responsive-modal";
import ReactSlider from "react-slider";

const MobileSearch = () => {
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <>
      <div className="text-sm my-4 flex w-full justify-between gap-4 items-center">
        <div className="w-full">
          <TagsInput
            value={selected}
            onChange={setSelected}
            name="brands"
            placeHolder="Search Reway"
          />
        </div>

        <button
          onClick={onOpenModal}
          className="w-10 h-10 rounded-sm bg-rewayBlue"
        >
          <FontAwesomeIcon icon={faFilter} color="white" />
        </button>
        <Modal open={open} onClose={onCloseModal}>
          <div className="w-full h-full">
            <h3 className="w-80">Search Reway</h3>
            <div className="w-full">
              <label htmlFor="Colour">Colour</label>
              <select
                name="itemColour"
                id="colour"
                className="w-full border border-rewayLightGray rounded-sm p-2"
              >
                <option value="Yellow">Yellow</option>
                <option value="Yellow">Blue</option>
              </select>
            </div>
            <div className="w-full ">
              <label htmlFor="pricing">Pricing</label>
              {/* add price slider */}
              <ReactSlider
                className="horizontal-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                defaultValue={[50, 3500]}
                ariaLabel={["Lower thumb", "Upper thumb"]}
                ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
                pearling
                minDistance={10}
              />
            </div>
            {/* add toast notifcations and perhaps email.js */}
            <button className="bg-rewayBlue text-rewayWhite py-4 w-full self-center flex gap-2 items-center justify-center font-suez font-bold text-xl">
              <FontAwesomeIcon icon={faSearch} />
              Search
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default MobileSearch;
