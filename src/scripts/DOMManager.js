import dataManager from './data.js';
import convert from './convert.js';
import eventManager from './eventManager.js';
const DOMManager = {
	runIt() {
		this.renderPlacesOptions('where-options');
	},
	renderPlaces(htmlText, id) {
		document.getElementById('card-container').innerHTML += htmlText;
	},
	renderPlacesOptions(string) {
		const optionsHTML = document.getElementById(string);
		optionsHTML.innerHTML = `<option>Place</option>`;

		dataManager.getPlaces().then(data => {
			data.forEach(element => {
				optionsHTML.innerHTML += `<option value="${element.id}">${element.name}</option>`;
			});
		});
	},
	deleteInterest(id) {
		dataManager.deleteInterest(Number(id)).then(() => {
			convert.runIt();
			eventManager.runIt();
		});
	},
	editReview(reviewId) {
		if (
			document
				.getElementById('card-container')
				.querySelector('#cost-text') != null
		) {
			document.getElementById(
				'alert-header'
			).innerHTML = `Please save or discard cost first`;
			$('.ui.tiny.modal')
				.modal('setting', {
					onApprove: function() {
						return true;
					}
				})
				.modal('show');
		} else if (
			document
				.getElementById('card-container')
				.querySelector('#review-text') != null
		) {
			document.getElementById(
				'alert-header'
			).innerHTML = `Please save or discard Review first`;
			$('.ui.tiny.modal')
				.modal('setting', {
					onApprove: function() {
						return true;
					}
				})
				.modal('show');
		} else if (
			document
				.getElementById('card-container')
				.querySelector('#description-text') != null
		) {
			document.getElementById(
				'alert-header'
			).innerHTML = `Please save or discard description first`;
			$('.ui.tiny.modal')
				.modal('setting', {
					onApprove: function() {
						return true;
					}
				})
				.modal('show');
		} else if (
			document
				.getElementById('card-container')
				.querySelector('#name-text') != null
		) {
			document.getElementById(
				'alert-header'
			).innerHTML = `Please save or discard name first`;
			$('.ui.tiny.modal')
				.modal('setting', {
					onApprove: function() {
						return true;
					}
				})
				.modal('show');
		} else if (
			document
				.getElementById('card-container')
				.querySelector('#place-text') != null
		) {
			document.getElementById(
				'alert-header'
			).innerHTML = `Please save or discard place first`;
			$('.ui.tiny.modal')
				.modal('setting', {
					onApprove: function() {
						return true;
					}
				})
				.modal('show');
		} else {
			const reviewNode = document.getElementById(reviewId);
			const review = reviewNode.innerText;
			reviewNode.innerHTML = `
            <textarea name="" id="review-text" cols="30" rows="10" placeholder="Description">${review}</textarea>
            <button class="ui primary button" id="save-review">Save Review</button>
            <button class="ui button" id="discard-review">Discard Review</button>
            `;

			eventManager.saveEvt(reviewId.split('--')[1], 'review');
			eventManager.discardEvt(
				reviewNode,
				'review',
				`<div class="review" id="${reviewId}">${review}</div>`
			);
		}
	},
	editCost(costId) {
		if (
			document
				.getElementById('card-container')
				.querySelector('#cost-text') != null
		) {
			document.getElementById(
				'alert-header'
			).innerHTML = `Please save or discard cost first`;
			$('.ui.tiny.modal')
				.modal('setting', {
					onApprove: function() {
						return true;
					}
				})
				.modal('show');
		} else if (
			document
				.getElementById('card-container')
				.querySelector('#review-text') != null
		) {
			document.getElementById(
				'alert-header'
			).innerHTML = `Please save or discard Review first`;
			$('.ui.tiny.modal')
				.modal('setting', {
					onApprove: function() {
						return true;
					}
				})
				.modal('show');
		} else if (
			document
				.getElementById('card-container')
				.querySelector('#description-text') != null
		) {
			document.getElementById(
				'alert-header'
			).innerHTML = `Please save or discard description first`;
			$('.ui.tiny.modal')
				.modal('setting', {
					onApprove: function() {
						return true;
					}
				})
				.modal('show');
		} else if (
			document
				.getElementById('card-container')
				.querySelector('#name-text') != null
		) {
			document.getElementById(
				'alert-header'
			).innerHTML = `Please save or discard name first`;
			$('.ui.tiny.modal')
				.modal('setting', {
					onApprove: function() {
						return true;
					}
				})
				.modal('show');
		} else if (
			document
				.getElementById('card-container')
				.querySelector('#place-text') != null
		) {
			document.getElementById(
				'alert-header'
			).innerHTML = `Please save or discard place first`;
			$('.ui.tiny.modal')
				.modal('setting', {
					onApprove: function() {
						return true;
					}
				})
				.modal('show');
		} else {
			const costNode = document.getElementById(costId);
			const cost = costNode.innerText.split('$').join('');

			costNode.innerHTML = `
        <div class="ui right labeled input">
            <input type="text" id="cost-text" placeholder="" value="${cost}">
            <div class="ui basic label button positive" id="save-cost"><i class="check icon"></i></div>
            <div class="ui basic label button negative" id="discard-cost"><i class="x icon"></i></div>
        </div>
        `;
			eventManager.saveCostEvt(costId.split('--')[1]);
			eventManager.discardCostEvt(costNode, cost, costId);
		}
	},
	editDescription(descriptionId) {
		if (
			document
				.getElementById('card-container')
				.querySelector('#cost-text') != null
		) {
			document.getElementById(
				'alert-header'
			).innerHTML = `Please save or discard cost first`;
			$('.ui.tiny.modal')
				.modal('setting', {
					onApprove: function() {
						return true;
					}
				})
				.modal('show');
		} else if (
			document
				.getElementById('card-container')
				.querySelector('#review-text') != null
		) {
			document.getElementById(
				'alert-header'
			).innerHTML = `Please save or discard Review first`;
			$('.ui.tiny.modal')
				.modal('setting', {
					onApprove: function() {
						return true;
					}
				})
				.modal('show');
		} else if (
			document
				.getElementById('card-container')
				.querySelector('#description-text') != null
		) {
			document.getElementById(
				'alert-header'
			).innerHTML = `Please save or discard description first`;
			$('.ui.tiny.modal')
				.modal('setting', {
					onApprove: function() {
						return true;
					}
				})
				.modal('show');
		} else if (
			document
				.getElementById('card-container')
				.querySelector('#name-text') != null
		) {
			document.getElementById(
				'alert-header'
			).innerHTML = `Please save or discard name first`;
			$('.ui.tiny.modal')
				.modal('setting', {
					onApprove: function() {
						return true;
					}
				})
				.modal('show');
		} else if (
			document
				.getElementById('card-container')
				.querySelector('#place-text') != null
		) {
			document.getElementById(
				'alert-header'
			).innerHTML = `Please save or discard place first`;
			$('.ui.tiny.modal')
				.modal('setting', {
					onApprove: function() {
						return true;
					}
				})
				.modal('show');
		} else {
			const descriptionNode = document.getElementById(descriptionId);
			const description = descriptionNode.innerText;
			descriptionNode.innerHTML = `
            <textarea name="" id="description-text" cols="30" rows="10" placeholder="Description">${description}</textarea>
            <button class="ui primary button" id="save-description">Save Description</button>
            <button class="ui button" id="discard-description">Discard Description</button>
            `;

			eventManager.saveEvt(descriptionId.split('--')[1], 'description');
			eventManager.discardEvt(
				descriptionNode,
				'description',
				`<div class="description" id="description--${descriptionId}">
                ${description}
                </div>`
			);
		}
	},
	editName(nameId) {
		if (
			document
				.getElementById('card-container')
				.querySelector('#cost-text') != null
		) {
			document.getElementById(
				'alert-header'
			).innerHTML = `Please save or discard cost first`;
			$('.ui.tiny.modal')
				.modal('setting', {
					onApprove: function() {
						return true;
					}
				})
				.modal('show');
		} else if (
			document
				.getElementById('card-container')
				.querySelector('#review-text') != null
		) {
			document.getElementById(
				'alert-header'
			).innerHTML = `Please save or discard Review first`;
			$('.ui.tiny.modal')
				.modal('setting', {
					onApprove: function() {
						return true;
					}
				})
				.modal('show');
		} else if (
			document
				.getElementById('card-container')
				.querySelector('#description-text') != null
		) {
			document.getElementById(
				'alert-header'
			).innerHTML = `Please save or discard description first`;
			$('.ui.tiny.modal')
				.modal('setting', {
					onApprove: function() {
						return true;
					}
				})
				.modal('show');
		} else if (
			document
				.getElementById('card-container')
				.querySelector('#name-text') != null
		) {
			document.getElementById(
				'alert-header'
			).innerHTML = `Please save or discard name first`;
			$('.ui.tiny.modal')
				.modal('setting', {
					onApprove: function() {
						return true;
					}
				})
				.modal('show');
		} else if (
			document
				.getElementById('card-container')
				.querySelector('#place-text') != null
		) {
			document.getElementById(
				'alert-header'
			).innerHTML = `Please save or discard place first`;
			$('.ui.tiny.modal')
				.modal('setting', {
					onApprove: function() {
						return true;
					}
				})
				.modal('show');
		} else {
			const nameNode = document.getElementById(nameId);
			const name = nameNode.innerText;
			nameNode.innerHTML = `
            <div class="ui right labeled input">
            <input type="text" id="name-text" placeholder="" value="${name}">
            <div class="ui basic label button positive" id="save-name"><i class="check icon"></i></div>
            <div class="ui basic label button negative" id="discard-name"><i class="x icon"></i></div>
        </div>
            `;

			eventManager.saveEvt(nameId.split('--')[1], 'name');
			eventManager.discardEvt(nameNode, 'name', `${name}`);
		}
	},
	editPlace(placeId) {
		if (
			document
				.getElementById('card-container')
				.querySelector('#cost-text') != null
		) {
			document.getElementById(
				'alert-header'
			).innerHTML = `Please save or discard cost first`;
			$('.ui.tiny.modal')
				.modal('setting', {
					onApprove: function() {
						return true;
					}
				})
				.modal('show');
		} else if (
			document
				.getElementById('card-container')
				.querySelector('#review-text') != null
		) {
			document.getElementById(
				'alert-header'
			).innerHTML = `Please save or discard Review first`;
			$('.ui.tiny.modal')
				.modal('setting', {
					onApprove: function() {
						return true;
					}
				})
				.modal('show');
		} else if (
			document
				.getElementById('card-container')
				.querySelector('#description-text') != null
		) {
			document.getElementById(
				'alert-header'
			).innerHTML = `Please save or discard description first`;
			$('.ui.tiny.modal')
				.modal('setting', {
					onApprove: function() {
						return true;
					}
				})
				.modal('show');
		} else if (
			document
				.getElementById('card-container')
				.querySelector('#name-text') != null
		) {
			document.getElementById(
				'alert-header'
			).innerHTML = `Please save or discard name first`;
			$('.ui.tiny.modal')
				.modal('setting', {
					onApprove: function() {
						return true;
					}
				})
				.modal('show');
		} else if (
			document
				.getElementById('card-container')
				.querySelector('#place-text') != null
		) {
			document.getElementById(
				'alert-header'
			).innerHTML = `Please save or discard place first`;
			$('.ui.tiny.modal')
				.modal('setting', {
					onApprove: function() {
						return true;
					}
				})
				.modal('show');
		} else {
			const placeNode = document.getElementById(placeId);
			const place = placeNode.innerText;
			placeNode.innerHTML = `<select class="ui search dropdown" id="place-text">

            </select>
            <div class="ui basic label button positive" id="save-place"><i class="check icon"></i></div>
            <div class="ui basic label button negative" id="discard-place"><i class="x icon"></i></div>
            `;
			this.renderPlacesOptions('place-text');

			eventManager.saveEvt(placeId.split('--')[1], 'place');
			eventManager.discardEvt(placeNode, 'place', `${place}`);
		}
	}
};

export default DOMManager;
